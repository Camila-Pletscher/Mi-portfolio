import React from "react";
import styles from "./home.module.css";
import cv from "../../Camila-Pletscher-cv-2023_compressed.pdf";

function Home(props) {
  return (
    <div className={styles.container_home}>
      <div className={styles.container_all}>
        <div className={styles.container_up}>
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

            <button onClick={props.scrollToAbout} className={styles.contact}>
              Conoce más
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
