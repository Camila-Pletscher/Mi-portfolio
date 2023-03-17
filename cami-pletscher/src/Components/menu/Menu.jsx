import React from "react";
import { Link } from "react-router-dom";
import styles from "./menu.module.css";

function Menu(props) {



  return (
<div className={styles.container_logo_nav}>
        <div className={styles.container_logo}>
          <img
            src="https://i.postimg.cc/rsJNGbKY/Logo-personal-web.png"
            alt=""
          ></img>
        </div>
        <div className={styles.container_nav}>
        <Link to="/" className={styles.active}>
          <div>HOME</div>
        </Link>
          <Link to="/about_me">
            <div>SOBRE MI</div>
          </Link>
          
          <div>MI PORTFOLIO</div>
          <div>SKILLS</div>
          <div>CONTACTO</div>
        </div>
      </div>
  );
}

export default Menu;
