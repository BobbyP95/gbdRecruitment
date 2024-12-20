import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AboutUs } from "./pages/AboutUs";
import { Home } from "./pages/Home";
import { Consulting } from "./pages/Consulting";
import { Recruiting } from "./pages/Recruiting";
import { GetAJob } from "./pages/GetAJob";
import { ContactUs } from "./pages/ContactUs";

function App() {
  const links = [
    { name: "CONSULTING", href: "/gbdRecruitment/#/consulting" },
    { name: "RECRUITING", href: "/gbdRecruitment/#/recruiting" },
    { name: "GET A JOB", href: "/gbdRecruitment/#/get_a_job" },
    { name: "ABOUT US", href: "/gbdRecruitment/#/about_us" },
    { name: "CONTACT US", href: "/gbdRecruitment/#/contact_us" },
  ];

  const BASE_URL = import.meta.env.BASE_URL;
  return (
    <>
      <Navbar
        logo={`${BASE_URL}gbd.svg`}
        companyName="GBD LTD"
        links={links}
        showSearch={true}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/recruiting" element={<Recruiting />} />
        <Route path="/get_a_job" element={<GetAJob />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/contact_us" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
