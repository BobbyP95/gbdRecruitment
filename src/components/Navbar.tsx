import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
import { SocialIcon } from "react-social-icons";
<<<<<<< HEAD
import { FaBars, FaTimes } from "react-icons/fa";
=======
import "./navbar.css";
>>>>>>> 8530c44bddc32cce5b9f3208d909af117359ff09

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
<<<<<<< HEAD

=======
const BASE_URL = import.meta.env.BASE_URL;
>>>>>>> 8530c44bddc32cce5b9f3208d909af117359ff09
export function Navbar({
  logo,
  companyName,
  links = [],
  showSearch = true,
  user = {userName: "Bobby004", email: "bobby004@gmail.com", imgUrl:`${BASE_URL}bobPost.png`}
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
<<<<<<< HEAD
    <div className="header z-50">
      {/* <div className="topNav p-2 flex items-center justify-end gap-8 w-full bg-emerald-950">
        {showSearch && (
          <div className="relative hidden sm:block">
            <label htmlFor="siteSearch" className="sr-only">
              Search
            </label>
            <input
              id="siteSearch"
              type="text"
              placeholder="Search..."
              className="bg-emerald-100 text-emerald-950 rounded-full px-3 py-1 focus:outline-none focus:ring focus:ring-emerald-700"
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
      </div> */}

      <nav className="bg-gray-300 p-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Left side: Logo and Company Name */}
          <Link to="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
            <img
              src={logo}
              alt={`${companyName} logo`}
              className="h-8 w-28 mr-2 object-contain"
            />
            <span className="text-emerald-950 font-semibold">{companyName}</span>
          </Link>

          {/* Right side: Links (desktop) */}
          <div className="hidden lg:flex items-center space-x-6 text-sm">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `rightLinks font-semibold transition-colors ${
                    isActive
                      ? "text-emerald-950 underline underline-offset-4 decoration-[#e48f45] decoration-2"
                      : "text-emerald-900 hover:text-emerald-950"
                  }`
                }
              >
                {link.name}
              </NavLink>
=======
    <>
      <div className="header max-h-28">
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
>>>>>>> 8530c44bddc32cce5b9f3208d909af117359ff09
            ))}
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="lg:hidden text-emerald-950 text-2xl"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="navMenu1"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
<<<<<<< HEAD

        {/* Mobile menu panel */}
        {menuOpen && (
          <div
            id="navMenu1"
            className="navMenu flex flex-col lg:hidden mt-4 space-y-3 text-sm border-t border-emerald-900/20 pt-4"
          >
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rightLinks font-semibold transition-colors ${
                    isActive ? "text-emerald-950" : "text-emerald-900 hover:text-emerald-950"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
=======
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
              className={`navMenu  flex-col text-sm md:flex-row items-center md:flex space-x-2 lg:space-x-3  `}
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
                <img className="w-9   border-2 border-emerald-950 max-h-20 bg-slate-500 bor rounded-full md:w-12" src={user.imgUrl} alt="bob" />
              </div>
              <div className=" hidden"></div>

            </div>
>>>>>>> 8530c44bddc32cce5b9f3208d909af117359ff09
          </div>
        )}
      </nav>
    </div>
  );
}
