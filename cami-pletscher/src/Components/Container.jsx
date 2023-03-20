import React, { useRef } from "react";
import AboutMe from "./aboutMe/AboutMe";
import Menu from "./menu/Menu";
import Portfolio from "./portfolio/Portfolio";

function Container() {
  const aboutSection = useRef();
  const portfolioSection = useRef();

  const scrollToAbout = () => aboutSection.current.scrollIntoView();
  const scrollToPortfolio = () => portfolioSection.current.scrollIntoView();
  return (
    <>
      <Menu
        scrollToAbout={scrollToAbout}
        scrollToPortfolio={scrollToPortfolio}
      ></Menu>
      <div ref={aboutSection}>
        <AboutMe />
      </div>
      <div ref={portfolioSection}>
        <Portfolio />
      </div>
    </>
  );
}

export default Container;
