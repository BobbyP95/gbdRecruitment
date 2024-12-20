import "../App.css";
import { SocialIcon } from "react-social-icons";
import "./navbar.css";

type NavbarProps = {
  logo: string;
  companyName: string;
  links?: { name: string; href: string }[];
  showSearch?: boolean;
  user?:{userName: string; email: string; imgUrl: string}
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
  user = {userName: "Bobby004", email: "bobby004@gmail.com", imgUrl: "/bobPost.png"}
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
        <nav className=" bg-gray-300 p-2 md:p-4  max-h-24">
          <div className=" container mx-auto flex items-center justify-between">
            {/* Left side: Logo and Company Name */}
            <div className="flex items-center">
              <a href="/">
                <img
                  src={logo}
                  alt={`${companyName} logo`}
                  className="h-8 w-12 md:w-28 mr-2"
                />
              </a>

              <a
                href="/"
                className="resize text-emerald-950 text-xs md:text-xl font-semibold"
              >
                {companyName}
              </a>
            </div>

            {/* Right side: Links and optional search box */}
            <div
              id="navMenu1"
              className={`navMenu hidden flex-col text-sm md:flex-row items-center md:flex space-x-2 lg:space-x-3  `}
            >
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="rightLinks font-semibold text-emerald-900 hover:text-emerald-950 hover:underline text-xs lg:text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className=" cursor-pointer">
              <div className="flex gap-3 items-center justify-center">
                <span className="font-semibold text-emerald-900">{user.userName}</span>
                <img className="w-9 md:w-12 border-2 border-emerald-950 h-fit bg-slate-500 bor rounded-full" src={user.imgUrl} alt="bob" />
              </div>
              <div className=" hidden"></div>

            </div>
            <div className="dots text-3xl  md:hidden  ">
              <h1>...</h1>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
