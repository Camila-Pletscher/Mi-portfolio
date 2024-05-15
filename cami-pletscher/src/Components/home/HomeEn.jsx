import React from "react";
import styles from "./home.module.css";
import cv from "../../Camila-Pletscher-2024-EN.pdf";
import { Link } from "react-router-dom";

function HomeEn(props) {
  return (
    <div className={styles.container_home}>
      <div className={styles.container_all}>
        <div className={styles.container_up}>
          <Link to="/">
            {" "}
            <div className={styles.language}>
              <p>ES</p>
              <i class="material-icons">language</i>
            </div>
          </Link>
          <div className={styles.container_txt}>
            <div className={styles.cont_hola}>
              <p>HELLO!</p>
            </div>
            <div className={styles.cont_soy}>
              <p>
                I AM <span>CAMILA</span>
              </p>
            </div>
            <div className={styles.cont_anclaje}>
              <p>Graphic Designer & Front end developer</p>
            </div>
            <div className={styles.cont_description}>
              <p>I invite you to get to know me a little better.</p>
            </div>
          </div>
          <div className={styles.container_buttons}>
            <button className={styles.download}>
              <a href={cv} download="Camila-Pletscher-CV">
                {""}
                Download cv
              </a>
            </button>
            <Link to="/startEn">
              <button className={styles.contact}>See more</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeEn;
