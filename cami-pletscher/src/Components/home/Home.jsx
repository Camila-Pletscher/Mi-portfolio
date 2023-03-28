import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import styles from "./home.module.css";
import cv from "../../Camila-Pletscher-cv-2023_compressed.pdf";

function Home() {
  return (
    <div className={styles.container_home}>
      <div className={styles.container_logo}>
        <Logo />
      </div>

      <div className={styles.container_all}>
        <div className={styles.container_izq}>
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
        <div className={styles.container_profile}>
          <img
            className={styles.hide}
            src="https://i.postimg.cc/DZb2XkYn/home.png"
            alt=""
          ></img>
        </div>
      </div>
      <div className={styles.container_footer}>
        <div className={styles.cont_block_foot}>
          <div>Mi trabajo en</div>
          <div>
            <a href="https://github.com/Camila-Pletscher">
              <img
                src="https://i.postimg.cc/FHWT1GCV/Mesa-de-trabajo-4.png"
                alt="Github - Camila-Pletscher"
              ></img>
            </a>
          </div>
          <div>
            <img
              src="https://i.postimg.cc/YSvbFgJK/Mesa-de-trabajo-5.png"
              alt="Site Cami Pletscher"
            ></img>
          </div>
          <div>
            <a href="https://www.behance.net/camilapletscher1">
              <img
                src="https://i.postimg.cc/QMvSJC3B/Mesa-de-trabajo-6.png"
                alt="Behance - Camila Pletscher"
              ></img>
            </a>
          </div>
        </div>
        <div className={styles.line}>
          <img
            src="https://i.postimg.cc/25KGzw8L/Mesa-de-trabajo-10.png"
            alt=""
          ></img>
        </div>
        <div className={styles.cont_block_foot}>
          <div>Encontrame en</div>
          <div>
            <a href="https://www.workana.com/freelancer/6257ae499ed73d584ce610beda7e8d0c">
              <img
                src="https://i.postimg.cc/2SY0wjbg/Mesa-de-trabajo-7.png"
                alt="Workana - Camila Pletscher"
              ></img>
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/camila-pletscher-537b06177/">
              <img
                src="https://i.postimg.cc/wMt79qPp/Mesa-de-trabajo-7-copia.png"
                alt="Linkedin - Camila Pletscher"
              ></img>
            </a>
          </div>
          <div>
            <a href="mailto:camilapletscher@hotmail.com">
              <img
                src="https://i.postimg.cc/Y9DvcGdR/Mesa-de-trabajo-7-copia-2.png"
                alt="mail camilapletscher@hotmail.com"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
