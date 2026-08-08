import { Footer } from "../components/Footer";
import { PageHero } from "../components/PageHero";
import { FaBullseye, FaHandshake, FaRegLightbulb } from "react-icons/fa";

const values = [
  {
    icon: FaHandshake,
    title: "People first",
    description:
      "Behind every job order is a business that needs help, and behind every application is a person who needs work. We treat both sides with the same respect.",
  },
  {
    icon: FaBullseye,
    title: "Fit over speed",
    description:
      "We'd rather send you one candidate who's right than five who are just available. A rushed placement costs everyone more time in the end.",
  },
  {
    icon: FaRegLightbulb,
    title: "Straight answers",
    description:
      "If a role, a candidate, or a strategy isn't working, we'll tell you — not just what's easy to hear.",
  },
];

export function AboutUs() {
  return (
    <>
<<<<<<< HEAD
      <PageHero
        eyebrow="Who We Are"
        title="Staffing built on getting it right, not getting it done fast"
        subtitle="GBD Company LTD connects businesses with the staff they need and connects job seekers with work that fits — built on relationships we intend to keep."
      />

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-emerald-950 mb-4">
            Our story
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {/* TODO: Replace with GBD's real founding story, year established,
                and any specific milestones you'd like to highlight. */}
            GBD Company LTD was founded to solve a problem both sides of the
            hiring table run into constantly: businesses spend weeks sorting
            through applicants who aren't a fit, and qualified people spend
            just as long applying to roles that go nowhere. We built GBD to
            close that gap — with a team that actually vets candidates and
            actually understands what our client companies need.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Today we work across call center, data entry, administrative,
            sales, and logistics roles, offering both direct recruiting
            services and broader workforce consulting for companies building
            out their teams.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-emerald-950 text-center mb-10">
            What guides how we work
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center px-2">
                <Icon className="text-[#e48f45] text-3xl mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-emerald-950">
                  {title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-emerald-950">
            Want to work with us?
          </h2>
          <p className="mt-3 text-gray-600">
            Whether you're hiring or looking for work, we'd like to hear from
            you.
          </p>
          <a
            href="/contact_us"
            className="inline-block mt-6 bg-emerald-950 hover:bg-emerald-900 text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </section>

      <Footer />
=======
      <div className="pt-28"></div>
      <h1>AboutUs Page!!!</h1>
      <img src="/home.jpg" alt="" />
>>>>>>> 8530c44bddc32cce5b9f3208d909af117359ff09
    </>
  );
}
