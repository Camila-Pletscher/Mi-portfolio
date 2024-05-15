import React from "react";
import { Link } from "react-router-dom";
import styles from "./logo.module.css";
import logo from "../../Principal.svg";



function LogoEn() {
  return (
    <div className={styles.container_logo}>
      <Link to="/homeEn">
        <img
          src={logo}
          alt=""
        ></img>
      </Link>
    </div>
  );
}

export default LogoEn;
