import { useState, type ChangeEvent, type FormEvent } from "react";
import { Footer } from "../components/Footer";
import { PageHero } from "../components/PageHero";
import { ProcessSteps } from "../components/ProcessSteps";

const steps = [
  {
    title: "Tell us about yourself",
    description:
      "Fill out the form below with your experience, availability, and the type of work you're looking for.",
  },
  {
    title: "We review your profile",
    description:
      "Our team matches you against current openings from the companies we work with.",
  },
  {
    title: "We reach out",
    description:
      "If there's a fit, we'll contact you directly to talk through the role before anything moves forward.",
  },
  {
    title: "Interview and placement",
    description:
      "We prepare you for the interview and stay in touch through your first weeks on the job.",
  },
];

const positionOptions = [
  "Call Center / Customer Support",
  "Data Entry",
  "Administrative / Office Support",
  "Sales",
  "Warehouse / Logistics",
  "Hospitality",
  "Other",
];

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  message: string;
};

const initialFormState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  position: positionOptions[0],
  message: "",
};

export function GetAJob() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [resumeFileName, setResumeFileName] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    setResumeFileName(file ? file.name : "");
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Wire this up to a real submission endpoint before launch.
    // This is a static site (deployed via gh-pages), so there is no
    // built-in backend to receive this data yet. See DEPLOYMENT.md for
    // recommended options (Formspree, EmailJS, or a small serverless
    // function) to actually deliver these applications to your team.
    console.log("Job application submitted:", formData, resumeFileName);
    setSubmitted(true);
    setFormData(initialFormState);
    setResumeFileName("");
  }

  return (
    <>
      <PageHero
        eyebrow="For Job Seekers"
        title="Let us help you find work"
        subtitle="GBD connects job seekers with companies that are actively hiring. Tell us what you're looking for and we'll do the matching."
      />

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-emerald-950">
            How it works
          </h2>
        </div>
        <ProcessSteps steps={steps} />
      </section>

      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-emerald-950 text-center mb-2">
            Apply now
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Fill this out and a member of our team will reach out about
            openings that match.
          </p>

          {submitted && (
            <div
              role="status"
              className="mb-6 bg-emerald-100 text-emerald-900 border border-emerald-300 rounded-lg px-4 py-3 text-center"
            >
              Thanks — your information was received. We'll be in touch soon.
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-sm p-6 sm:p-8 space-y-5"
          >
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-emerald-950 mb-1"
              >
                Full name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-emerald-700"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
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
                  htmlFor="phone"
                  className="block text-sm font-medium text-emerald-950 mb-1"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-emerald-700"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="position"
                className="block text-sm font-medium text-emerald-950 mb-1"
              >
                What kind of work are you looking for?
              </label>
              <select
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-emerald-700 bg-white"
              >
                {positionOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="resume"
                className="block text-sm font-medium text-emerald-950 mb-1"
              >
                Resume (optional)
              </label>
              <input
                id="resume"
                name="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-emerald-950 file:text-white hover:file:bg-emerald-900 file:cursor-pointer"
              />
              {resumeFileName && (
                <p className="mt-1 text-sm text-gray-500">
                  Selected: {resumeFileName}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-emerald-950 mb-1"
              >
                Anything else we should know?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-emerald-700"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#e48f45] hover:bg-[#d17d34] text-white font-semibold py-3 rounded-full transition-colors"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
