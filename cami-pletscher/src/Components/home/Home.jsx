import React from "react";
import styles from "./home.module.css";
import cv from "../../Camila-Pletscher-2024.pdf";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={styles.container_home}>
      <div className={styles.container_all}>
        <div className={styles.container_up}>
          <Link to="/homeEn">
            {" "}
            <div className={styles.language}>
              <p>EN</p>
              <i class="material-icons">language</i>
            </div>
          </Link>
          <div className={styles.container_txt}>
            <div className={styles.cont_hola}>
              <p>HOLA!</p>
            </div>
            <div className={styles.cont_soy}>
              <p>
                SOY <span>CAMILA</span>
              </p>
            </div>
            <div className={styles.cont_anclaje}>
              <p>Graphic Designer & Front end developer</p>
            </div>
            <div className={styles.cont_description}>
              <p>Te invito a conocerme un poco más.</p>
            </div>
          </div>
          <div className={styles.container_buttons}>
            <button className={styles.download}>
              <a href={cv} download="Camila-Pletscher-CV">
                {""}
                Descargar cv
              </a>
            </button>
            <Link to="/start">
              <button className={styles.contact}>Conoce más</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
