import { Link } from "react-router-dom";
import {
  FaBolt,
  FaHandshake,
  FaSearchDollar,
  FaShieldAlt,
} from "react-icons/fa";
import { Footer } from "../components/Footer";
import { ReadyOption } from "../components/ReadyOption";

const heroTiles = [
  {
    tailwindColor: "rgba(22, 75, 96, 0.8)",
    optionText: "Get to work",
    buttonText: "Call Center Roles",
    cssClass: "callCenter",
    to: "/get_a_job",
  },
  {
    tailwindColor: "rgba(228, 143, 69, 0.8)",
    optionText: "Hire people",
    buttonText: "Find Staff",
    cssClass: "dataEntry",
    to: "/recruiting",
  },
  {
    tailwindColor: "rgba(37, 67, 54, 0.8)",
    optionText: "Plan ahead",
    buttonText: "Get Consultation",
    cssClass: "consulting",
    to: "/consulting",
  },
];

const valueProps = [
  {
    icon: FaBolt,
    title: "Fast turnaround",
    description: "Most roles get qualified candidates within days, not weeks.",
  },
  {
    icon: FaShieldAlt,
    title: "Vetted candidates",
    description: "Every candidate is screened for skills and reliability before you meet them.",
  },
  {
    icon: FaHandshake,
    title: "We stay involved",
    description: "We check in after placement to make sure it's actually working out.",
  },
  {
    icon: FaSearchDollar,
    title: "Fair, transparent pricing",
    description: "You'll know our fees upfront — no surprise costs after placement.",
  },
];

// TODO: Replace with GBD's real, current numbers.
const stats = [
  { value: "500+", label: "Placements made" },
  { value: "120+", label: "Client companies" },
  { value: "10+", label: "Years in business" },
  { value: "48h", label: "Avg. first response" },
];

const services = [
  {
    title: "Consulting",
    description:
      "Workforce planning and HR strategy for companies building out their teams.",
    href: "/consulting",
  },
  {
    title: "Recruiting",
    description:
      "Sourcing, screening, and placing staff across call center, data entry, admin, and more.",
    href: "/recruiting",
  },
  {
    title: "Get A Job",
    description:
      "Looking for work? Tell us what you're after and we'll match you to real openings.",
    href: "/get_a_job",
  },
];

export function Home() {
  return (
    <>
      {/* Hero — headline over the existing three-panel image CTA */}
      <div className="relative">
        <div className="absolute inset-x-0 top-0 z-10 pt-40 sm:pt-36 lg:pt-32 px-4 pointer-events-none">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
              Staffing that works both ways
            </h1>
            <p className="mt-4 text-white/90 text-base sm:text-lg drop-shadow max-w-xl mx-auto">
              GBD Company LTD connects businesses with staff they can rely
              on, and job seekers with work that fits.
            </p>
          </div>
        </div>

        <div className="home flex flex-col sm:flex-row">
          {heroTiles.map((tile) => (
            <div key={tile.buttonText} className="w-full sm:w-1/3 h-72 sm:h-lvh">
              <ReadyOption {...tile} />
            </div>
          ))}
        </div>
      </div>

      {/* Value props */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-emerald-950 text-center mb-10">
            Why companies and candidates choose GBD
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center px-2">
                <Icon className="text-[#e48f45] text-3xl mx-auto mb-3" />
                <h3 className="font-semibold text-emerald-950">{title}</h3>
                <p className="mt-1 text-sm text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-emerald-950 py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</p>
              <p className="mt-1 text-sm text-emerald-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-emerald-950 text-center mb-10">
            What we do
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.href}
                className="block bg-white rounded-lg p-6 border border-gray-200 hover:border-emerald-950 hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-semibold text-emerald-950">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">{service.description}</p>
                <span className="inline-block mt-4 text-[#e48f45] font-semibold text-sm">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-emerald-950">
            Ready to get started?
          </h2>
          <p className="mt-3 text-gray-600">
            Whether you're hiring or looking for your next role, the first
            step is the same — tell us what you need.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/recruiting"
              className="bg-emerald-950 hover:bg-emerald-900 text-white font-semibold px-8 py-3 rounded-full transition-colors"
            >
              I'm Hiring
            </Link>
            <Link
              to="/get_a_job"
              className="bg-[#e48f45] hover:bg-[#d17d34] text-white font-semibold px-8 py-3 rounded-full transition-colors"
            >
              I'm Looking For Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
