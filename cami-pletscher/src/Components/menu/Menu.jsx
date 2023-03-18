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
        {SECTIONS.map((e) => (
          <Link to={e.href} key={e.name}>
            {e.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

const SECTIONS = [
  { name: "Home", href: "/" },
  { name: "AboutMe", href: "about_me" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Skills", href: "skills" },
  { name: "Contacto", href: "contacto" },
];

export default Menu;
