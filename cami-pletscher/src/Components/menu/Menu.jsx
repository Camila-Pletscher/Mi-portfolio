import React from "react";

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
        <div onClick={props.scrollToAbout}>About</div>
        <div onClick={props.scrollToPortfolio}>Portfolio</div>
      </div>
    </div>
  );
}

export default Menu;
