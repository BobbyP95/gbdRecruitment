import { Footer } from "../components/Footer";
import { PageHero } from "../components/PageHero";
import {
  FaChartLine,
  FaClipboardCheck,
  FaSitemap,
  FaUsersCog,
} from "react-icons/fa";

const services = [
  {
    icon: FaSitemap,
    title: "Workforce Planning",
    description:
      "We assess where your team is stretched thin, forecast future headcount needs, and build a staffing structure that scales with your business.",
  },
  {
    icon: FaClipboardCheck,
    title: "HR Process Consulting",
    description:
      "From onboarding to performance reviews, we review your existing HR processes and recommend practical improvements that reduce turnover.",
  },
  {
    icon: FaUsersCog,
    title: "Organizational Design",
    description:
      "We help you structure teams and reporting lines so accountability is clear and work doesn't fall through the cracks.",
  },
  {
    icon: FaChartLine,
    title: "Market & Salary Benchmarking",
    description:
      "We research current market rates for the roles you're hiring so your offers stay competitive without overpaying.",
  },
];

export function Consulting() {
  return (
    <>
      <PageHero
        eyebrow="For Businesses"
        title="Consulting that fixes the staffing problem before it starts"
        subtitle="Before you hire, you need a plan. We work with your leadership team to understand where staffing is breaking down and build a strategy that solves it — not just a list of resumes."
      />

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-6">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="border border-gray-200 rounded-lg p-6 hover:border-emerald-950 transition-colors"
            >
              <Icon className="text-[#e48f45] text-3xl mb-4" />
              <h3 className="text-xl font-semibold text-emerald-950">{title}</h3>
              <p className="mt-2 text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-emerald-950">
            Not sure where to start?
          </h2>
          <p className="mt-3 text-gray-600">
            Tell us what's going on with your team and we'll recommend where
            consulting can have the biggest impact — no obligation.
          </p>
          <a
            href="/contact_us"
            className="inline-block mt-6 bg-[#e48f45] hover:bg-[#d17d34] text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Talk to a Consultant
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
