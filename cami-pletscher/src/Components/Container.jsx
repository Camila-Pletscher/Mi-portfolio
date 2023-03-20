import React, { useRef } from "react";
import AboutMe from "./aboutMe/AboutMe";
import Menu from "./menu/Menu";
import Portfolio from "./portfolio/Portfolio";
import Skills from "./skills/Skills";

function Container() {
  const aboutSection = useRef();
  const portfolioSection = useRef();
  const skillsSection = useRef();

  const scrollToAbout = () => aboutSection.current.scrollIntoView();
  const scrollToPortfolio = () => portfolioSection.current.scrollIntoView();
  const scrollToSkills = () => skillsSection.current.scrollIntoView();
  return (
    <>
      <Menu
        scrollToAbout={scrollToAbout}
        scrollToPortfolio={scrollToPortfolio}
        scrollToSkills={scrollToSkills}
      ></Menu>
      <div ref={aboutSection}>
        <AboutMe />
      </div>
      <div ref={portfolioSection}>
        <Portfolio />
      </div>
      <div ref={skillsSection}>
        <Skills/>
      </div>
    </>
  );
}

export default Container;
