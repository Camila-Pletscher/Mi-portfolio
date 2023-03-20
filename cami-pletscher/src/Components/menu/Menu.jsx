import React from "react";
import Logo from "../logo/Logo";

import styles from "./menu.module.css";

function Menu(props) {
  return (
    <div className={styles.container_logo_nav}>
      <Logo/>
      <div className={styles.container_nav}>
        <div onClick={props.scrollToAbout}>SOBRE MI</div>
        <div onClick={props.scrollToPortfolio}>PORTFOLIO</div>
        <div onClick={props.scrollToSkills}>SKILLS</div>
        <div>CONTACTO</div>
      </div>
    </div>
  );
}

export default Menu;
