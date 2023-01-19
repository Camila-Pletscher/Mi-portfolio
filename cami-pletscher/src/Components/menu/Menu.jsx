import React from "react";
import { Link } from "react-router-dom";
import styles from "./menu.module.css";

function Menu() {
  return (
    <div className={styles.container_menu}>
      <div className={styles.container_profile}>
        <img
          src="https://i.postimg.cc/j5f5tj4p/selfie-fondo-cuad.png"
          alt=""
        ></img>
      </div>
      <div className={styles.container_nav}>
        <Link to="/">
          <div className={styles.cont_home}>
            <p>HOME</p>
          </div>
        </Link>
        <div className={styles.cont_sobre_mi}>
          <p>SOBRE MI</p>
        </div>
        <div className={styles.cont_skills}>
          <p>KILLS</p>
        </div>
        <div className={styles.cont_logros}>
          <p>LOGROS</p>
        </div>
        <div className={styles.cont_portfolio}>
          <p>PORTFOLIO</p>
        </div>
        <div className={styles.cont_contact}>
          <p>CONTACTO</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
