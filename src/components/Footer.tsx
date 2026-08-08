import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

type FooterProps = {
  companyName?: string;
};

const quickLinks = [
  { name: "Consulting", href: "/consulting" },
  { name: "Recruiting", href: "/recruiting" },
  { name: "Get A Job", href: "/get_a_job" },
  { name: "About Us", href: "/about_us" },
  { name: "Contact Us", href: "/contact_us" },
];

const socialMediaUrls = [
  "https://twitter.com/",
  "https://facebook.com/",
  "https://instagram.com/",
];

export function Footer({ companyName = "GBD Company LTD" }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-emerald-950 text-emerald-100">
      <div className="max-w-6xl mx-auto px-4 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <span className="text-white text-lg font-bold">{companyName}</span>
          <p className="mt-3 text-sm text-emerald-200 leading-relaxed">
            Connecting businesses with staff they can rely on, and job
            seekers with work that fits.
          </p>
          <div className="flex space-x-3 mt-4">
            {socialMediaUrls.map((url, index) => (
              <SocialIcon
                key={index}
                url={url}
                target="_blank"
                style={{ width: "2rem", height: "2rem" }}
              />
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className="text-emerald-200 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* For businesses / job seekers */}
        <div>
          <h3 className="text-white font-semibold mb-4">Get Started</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/recruiting"
                className="text-emerald-200 hover:text-white transition-colors"
              >
                Hire staff for your business
              </Link>
            </li>
            <li>
              <Link
                to="/get_a_job"
                className="text-emerald-200 hover:text-white transition-colors"
              >
                Find your next job
              </Link>
            </li>
            <li>
              <Link
                to="/consulting"
                className="text-emerald-200 hover:text-white transition-colors"
              >
                Get workforce consulting
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          {/* TODO: Replace with GBD's real contact details */}
          <ul className="space-y-2 text-sm text-emerald-200">
            <li>Address to be added</li>
            <li>Phone number to be added</li>
            <li>Email address to be added</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-emerald-900 py-5 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-emerald-300">
          <p>
            &copy; {year} {companyName}. All rights reserved.
          </p>
          <p>Registered in {/* TODO: add jurisdiction, e.g. "Ghana" */}—</p>
        </div>
      </div>
    </footer>
  );
}
