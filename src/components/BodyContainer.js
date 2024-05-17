import React from "react";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Interests from "./Interests";

const BodyContainer = () => {
  return (
    <div className="body-container-bg-container flex flex-col">
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Interests />
      <Contact />
    </div>
  );
};

export default BodyContainer;
