import React from "react";
import { Link } from "react-router-dom";
import styles from "./logo.module.css";
import logo from "../../Principal.svg";



function Logo() {
  return (
    <div className={styles.container_logo_componente}>
      <Link to="/">
        <img
          src={logo}
          alt=""
        ></img>
      </Link>
    </div>
  );
}

export default Logo;
