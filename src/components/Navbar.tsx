import "../App.css";
import { SocialIcon } from "react-social-icons";
type NavbarProps = {
  logo: string;
  companyName: string;
  links?: { name: string; href: string }[];
  showSearch?: boolean;
};
const socialMediaUrls = [
  "https://twitter.com/",
  "https://facebook.com/",
  "https://instagram.com/",
];
export function Navbar({
  logo,
  companyName,
  links = [],
  showSearch = true,
}: NavbarProps) {
  return (
    <>
      <div className="header">
        <div className="topNav p-2 flex items-center justify-end gap-8 w-full bg-emerald-950 ">
          {showSearch && (
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-emerald-100 text-emerald-950 rounded-full px-3 py-1 focus:outline-none  focus:ring focus:ring-emerald-700"
              />
            </div>
          )}
          <div className="flex space-x-4">
            {socialMediaUrls.map((url, index) => (
              <SocialIcon
                key={index}
                url={url}
                target="_blank"
                style={{ width: "1.5rem", height: "1.5rem" }}
              />
            ))}
          </div>
        </div>
        <nav className=" bg-gray-300 p-4 ">
          <div className=" container mx-auto flex items-center justify-between">
            {/* Left side: Logo and Company Name */}
            <div className="flex items-center">
              <a href="/">
                <img
                  src={logo}
                  alt={`${companyName} logo`}
                  className="h-8 w-28 mr-2"
                />
              </a>

              <span className="resize text-emerald-950 text-auto font-semibold">
                {companyName}
              </span>
            </div>

            {/* Right side: Links and optional search box */}
            <div id="navMenu1" className={`navMenu hidden flex-col text-sm lg:flex-row items-center lg:flex space-x-4  `}>
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="rightLinks font-semibold text-emerald-900 hover:text-emerald-950"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="dots text-3xl lg:hidden ">
                <h1>...</h1>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
