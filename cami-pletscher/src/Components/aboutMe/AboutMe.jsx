import React, { useEffect } from "react";
import Education from "../education/Education";
import Experience from "../experience/Experience";
import styles from "./aboutme.module.css";
import "../styles/global.css";
import AOS from "aos";
import "aos/dist/aos.css";
import cv from "../../Camila-Pletscher-cv-2023_compressed.pdf";

function AboutMe(props) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.container_about}>
      <div data-aos="fade-up"
     data-aos-duration="3000" className="cont_title">
        <img
          src="https://i.postimg.cc/6pDvhPP5/Mesa-de-trabajo-1.png"
          alt="about me"
        ></img>
      </div>
      <div data-aos="fade-up"
     data-aos-duration="3000" className={styles.cont_img_info}>
        <div className={styles.cont_img_prof}>
          <img
            src="https://i.postimg.cc/527Ht2vr/selfie-fondo-cuad-2.png"
            alt=""
          ></img>
        </div>
        <div className={styles.cont_description}>
          <p className={styles.name}>Mi nombre es Camila Pletscher.</p>
          <p className={styles.profession}>
            Desarrolladora Front End / Diseñadora gráfica
          </p>
          <p className={styles.description}>
            Estudié en la Universidad Nacional de Lanús mi licenciatura y en
            Coderhouse la carrera de Desarrollo Front End. Soy muy metodica y
            organizada. Y disfruto mucho encontrar solucion a los problemas. Es
            por eso que a punto de concluir mi camino en la UnLa descubri que mi
            futuro profesional estaria en la programación, pero sin alejarme del
            todo del diseño digital
          </p>
          <div className={styles.cont_redes}>
            <a
              href="https://www.behance.net/camilapletscher1"
              target={"_blank"}
              rel="noreferrer"
            >
              <div className={styles.cont_red}>
                <div>
                  <img
                    src="https://i.postimg.cc/50TL2qYj/Mesa-de-trabajo-6-copia.png"
                    alt=""
                  ></img>
                </div>
                <div><p>Behance</p></div>
              </div>
            </a>
            <a
              href="https://github.com/Camila-Pletscher"
              target={"_blank"}
              rel="noreferrer"
            >
              <div className={styles.cont_red}>
                <div>
                  <img
                    src="https://i.postimg.cc/gJn3pB0f/Mesa-de-trabajo-4-copia.png"
                    alt=""
                  ></img>
                </div>
                <div><p>Git hub</p></div>
              </div>
            </a>
            <a
              href="https://www.workana.com/freelancer/6257ae499ed73d584ce610beda7e8d0c"
              target={"_blank"}
              rel="noreferrer"
            >
              <div className={styles.cont_red}>
                <div>
                  <img
                    src="https://i.postimg.cc/434zL3R4/Mesa-de-trabajo-22.png"
                    alt=""
                  ></img>
                </div>
                <div><p>Workana</p></div>
              </div>
            </a>
          </div>
          <div className={styles.container_buttons}>
            <button>
              <a href={cv} download="Camila-Pletscher-CV">
                {""}
                Descargar cv
              </a>
            </button>
            <button onClick={props.scrollToContact}>Contacto</button>
          </div>
        </div>
      </div>

      <div className="container">
        <Education />
      </div>

      <div className="container">
        <Experience />
      </div>
    </div>
  );
}

export default AboutMe;
