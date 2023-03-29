import React, { useRef } from "react";
import AboutMe from "./aboutMe/AboutMe";
import Achievements from "./achievements/Achievements";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import Menu from "./menu/Menu";
import Portfolio from "./portfolio/Portfolio";
import Services from "./services/Services";
import Skills from "./skills/Skills";

function Container() {
  const aboutSection = useRef();
  const servicesSection = useRef();
  const portfolioSection = useRef();
  const skillsSection = useRef();
  const achievementsSection = useRef();
  const contactSection = useRef();

  const scrollToAbout = () => aboutSection.current.scrollIntoView();
  const scrollToServices = () => servicesSection.current.scrollIntoView();
  const scrollToPortfolio = () => portfolioSection.current.scrollIntoView();
  const scrollToSkills = () => skillsSection.current.scrollIntoView();
  const scrollToAchievements = () =>
    achievementsSection.current.scrollIntoView();
  const scrollToContact = () => contactSection.current.scrollIntoView();
  return (
    <>
      <Menu
        scrollToAbout={scrollToAbout}
        scrollToServices={scrollToServices}
        scrollToPortfolio={scrollToPortfolio}
        scrollToSkills={scrollToSkills}
        scrollToAchievements={scrollToAchievements}
        scrollToContact={scrollToContact}
      ></Menu>
      <div className="container" ref={aboutSection}>
        <AboutMe scrollToContact={scrollToContact} />
      </div>
      <div className="container" ref={servicesSection}>
        <Services scrollToContact={scrollToContact} />
      </div>

      <div className="container" ref={portfolioSection}>
        <Portfolio />
      </div>
      <div className="container" ref={skillsSection}>
        <Skills />
      </div>
      <div className="container" ref={achievementsSection}>
        <Achievements />
      </div>
      <div className="container" ref={contactSection}>
        <Contact />
      </div>
      <div className="container">
        <Footer />
      </div>
      <div onClick={scrollToAbout} className="volver">
        <i className="material-icons">arrow_upward</i>
      </div>
    </>
  );
}

export default Container;
