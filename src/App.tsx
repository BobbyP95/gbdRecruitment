import "./App.css";
import {  Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AboutUs } from "./pages/AboutUs";
import { Home } from "./pages/Home";
import { Consulting } from "./pages/Consulting";
import { Recruiting } from "./pages/Recruiting";
import { GetAJob } from "./pages/GetAJob";
import { ContactUs } from "./pages/ContactUs";

function App() {
  const links = [
    { name: "CONSULTING", href: "/consulting" },
    { name: "RECRUITING", href: "/recruiting" },
    { name: "GET A JOB", href: "/get_a_job" },
    { name: "ABOUT US", href: "/about_us" },
    { name: "CONTACT US", href: "/contact_us" },
  ];

  return (
    <>
      <Navbar
        logo="./gbd.svg"
        companyName="GBD LTD"
        links={links}
        showSearch={true}
      />
      <Home />
      {/* <Router> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/recruiting" element={<Recruiting />} />
          <Route path="/get_a_job" element={<GetAJob />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/contact_us" element={<ContactUs />} />
        </Routes>
      {/* </Router> */}
    </>
  );
}

export default App;
