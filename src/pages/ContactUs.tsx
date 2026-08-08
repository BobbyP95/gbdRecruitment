import { useState, type ChangeEvent, type FormEvent } from "react";
import { Footer } from "../components/Footer";
import { PageHero } from "../components/PageHero";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactUs() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Same as the Get A Job form — wire this up to Formspree,
    // EmailJS, or a serverless function before launch. See DEPLOYMENT.md.
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setFormData(initialFormState);
  }

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="We'd like to hear from you"
        subtitle="Hiring, looking for work, or just have a question? Send us a message and we'll get back to you."
      />

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Contact details */}
          <div>
            <h2 className="text-2xl font-bold text-emerald-950 mb-6">
              Contact details
            </h2>
            {/* TODO: Replace placeholders below with GBD's real details. */}
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-[#e48f45] text-xl mt-1" />
                <div>
                  <p className="font-semibold text-emerald-950">Office</p>
                  <p className="text-gray-600">Address to be added</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-[#e48f45] text-xl mt-1" />
                <div>
                  <p className="font-semibold text-emerald-950">Phone</p>
                  <p className="text-gray-600">Phone number to be added</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-[#e48f45] text-xl mt-1" />
                <div>
                  <p className="font-semibold text-emerald-950">Email</p>
                  <p className="text-gray-600">Email address to be added</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="font-semibold text-emerald-950 mb-2">
                Business hours
              </p>
              <p className="text-gray-600 text-sm">
                Monday – Friday, 9:00 AM – 5:00 PM
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div>
            {submitted && (
              <div
                role="status"
                className="mb-6 bg-emerald-100 text-emerald-900 border border-emerald-300 rounded-lg px-4 py-3 text-center"
              >
                Message sent — we'll respond as soon as we can.
              </div>
            )}
            <form
              onSubmit={handleSubmit}
              className="bg-gray-100 rounded-lg p-6 sm:p-8 space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-emerald-950 mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-emerald-700"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-emerald-950 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-emerald-700"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-emerald-950 mb-1"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-emerald-700"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-emerald-950 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-emerald-700"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-950 hover:bg-emerald-900 text-white font-semibold py-3 rounded-full transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
