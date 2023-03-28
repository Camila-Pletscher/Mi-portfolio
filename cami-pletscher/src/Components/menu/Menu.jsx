import React from "react";
import Logo from "../logo/Logo";

import styles from "./menu.module.css";

function Menu(props) {
  return (
    <div className={styles.container_logo_nav}>
      <Logo />
      <div className={styles.container_nav}>
        <div onClick={props.scrollToAbout}>
          <p>SOBRE MI</p>
        </div>
        <div onClick={props.scrollToServices}>
          <p>SERVICIOS</p>
        </div>
        <div onClick={props.scrollToPortfolio}>
          <p>PORTFOLIO</p>
        </div>
        <div onClick={props.scrollToSkills}>
          <p>SKILLS</p>
        </div>
        <div onClick={props.scrollToAchievements}>
          <p>LOGROS</p>
        </div>
        <div onClick={props.scrollToContact}>
          <p>CONTACTO</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
