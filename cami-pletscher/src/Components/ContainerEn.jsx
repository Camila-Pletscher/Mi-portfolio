import React, { useRef } from "react";
import MenuEn from "./menu/MenuEn";
import AboutMeEn from "./aboutMe/AboutMeEn";
import ServicesEn from "./services/ServicesEn";
import PortfolioEn from "./portfolio/PortfolioEn";
import SkillsEn from "./skills/SkillsEn";
import AchievementsEn from "./achievements/AchievementsEn";
import ContactEn from "./contact/ContactEn";
import FooterEn from "./footer/FooterEn";


function ContainerEn() {
  const menuSection = useRef();
  const aboutSection = useRef();
  const servicesSection = useRef();
  const portfolioSection = useRef();
  const skillsSection = useRef();
  const achievementsSection = useRef();
  const contactSection = useRef();

  const scrollToMenu = () => menuSection.current.scrollIntoView();
  const scrollToAbout = () => aboutSection.current.scrollIntoView();
  const scrollToServices = () => servicesSection.current.scrollIntoView();
  const scrollToPortfolio = () => portfolioSection.current.scrollIntoView();
  const scrollToSkills = () => skillsSection.current.scrollIntoView();
  const scrollToAchievements = () =>
    achievementsSection.current.scrollIntoView();
  const scrollToContact = () => contactSection.current.scrollIntoView();
  return (
    <div ref={menuSection}>
      <MenuEn
        
        scrollToAbout={scrollToAbout}
        scrollToServices={scrollToServices}
        scrollToPortfolio={scrollToPortfolio}
        scrollToSkills={scrollToSkills}
        scrollToAchievements={scrollToAchievements}
        scrollToContact={scrollToContact}
      ></MenuEn>
      
      <div className="container" ref={aboutSection}>
        <AboutMeEn scrollToContact={scrollToContact} />
      </div>
      <div className="container" ref={servicesSection}>
        <ServicesEn scrollToContact={scrollToContact} />
      </div>

      <div className="container" ref={portfolioSection}>
        <PortfolioEn />
      </div>
      <div className="container_skills" ref={skillsSection}>
        <SkillsEn />
      </div>
      <div className="container" ref={achievementsSection}>
        <AchievementsEn />
      </div>
      <div className="container" ref={contactSection}>
        <ContactEn />
      </div>
      <div className="container">
        <FooterEn />
      </div>
      <div onClick={scrollToMenu} className="volver">
        <i className="material-icons">arrow_upward</i>
      </div>
    </div>
  );
}

export default ContainerEn;
