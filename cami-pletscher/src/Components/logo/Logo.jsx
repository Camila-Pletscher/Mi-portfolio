import React from "react";
import { Link } from "react-router-dom";
import styles from "./logo.module.css";

function Logo() {
  return (
    <div className={styles.container_logo}>
      <Link to="/">
        <img
          src="https://i.postimg.cc/rsJNGbKY/Logo-personal-web.png"
          alt=""
        ></img>
      </Link>
    </div>
  );
}

export default Logo;
