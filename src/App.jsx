import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Banner from "./components/banner/Banner.jsx";
import Features from "./components/features/Features.jsx";
import Projects from "./components/projects/Projects.jsx";
import Resume from "./components/resume/Resume.jsx";
import Testimonial from "./components/testimonial/Testimonial.jsx";
import Contact from "./components/contact/Contact.jsx";

import FooterBottom from "./components/footer/FooterBottom.jsx";
import Robot from "./components/Robot.jsx";


const App = () => {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-2 sm:px-1">
      <Navbar />
      <div className="max-w-screen-2xl mx-auto px-2 sm:px-1 md:px-5 lg:px-16">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Testimonial />
        <Contact />
        <Robot/>
        
        <FooterBottom/>
      </div>
    </div>
  );
};

export default App;
