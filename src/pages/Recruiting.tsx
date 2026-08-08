import { Footer } from "../components/Footer";
import { PageHero } from "../components/PageHero";
import { ProcessSteps } from "../components/ProcessSteps";

const steps = [
  {
    title: "Understand the role",
    description:
      "We talk to your team to understand the position, the skills that actually matter, and what success looks like in the first 90 days.",
  },
  {
    title: "Source candidates",
    description:
      "We draw from our existing candidate network and actively search for people who match — not just whoever applies first.",
  },
  {
    title: "Screen and shortlist",
    description:
      "Every candidate we send you has already been screened for skills, availability, and fit, so you're only reviewing serious options.",
  },
  {
    title: "Interview support",
    description:
      "We coordinate scheduling and can sit in on interviews if helpful, then gather feedback from both sides.",
  },
  {
    title: "Placement and follow-up",
    description:
      "Once you make a decision, we handle the offer logistics and check in after the start date to make sure it's working.",
  },
];

const industries = [
  "Call Centers & Customer Support",
  "Data Entry & Back Office",
  "Administrative & Office Support",
  "Sales & Business Development",
  "Warehouse & Logistics",
  "Hospitality",
];

export function Recruiting() {
  return (
    <>
      <PageHero
        eyebrow="For Businesses"
        title="Recruiting staff you can actually rely on"
        subtitle="Tell us who you need, and we'll find them. GBD handles sourcing, screening, and scheduling so you only spend time on candidates worth your time."
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
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-emerald-950 text-center mb-10">
            Industries we staff for
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="bg-white border-l-4 border-[#e48f45] rounded p-4 shadow-sm"
              >
                <span className="text-emerald-950 font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-emerald-950">
            Ready to fill a role?
          </h2>
          <p className="mt-3 text-gray-600">
            Send us the details and we'll follow up with next steps within one
            business day.
          </p>
          <a
            href="/contact_us"
            className="inline-block mt-6 bg-emerald-950 hover:bg-emerald-900 text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Start a Search
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
