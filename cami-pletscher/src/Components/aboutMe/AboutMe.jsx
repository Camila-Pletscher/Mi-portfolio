import React, { useEffect, useState } from "react";
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

  const [read, setRead] = useState(false);

  return (
    <div className={styles.container_about}>
      <div data-aos="fade-up" data-aos-duration="3000" className="cont_title">
        <img
          src="https://i.postimg.cc/6pDvhPP5/Mesa-de-trabajo-1.png"
          alt="about me"
        ></img>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className={styles.cont_img_info}
      >
        <div className={styles.cont_img_prof}>
          <img
            src="https://i.postimg.cc/527Ht2vr/selfie-fondo-cuad-2.png"
            alt=""
          ></img>
        </div>
        <div className={styles.cont_description}>
          <p className={styles.name}>
            <span className="hide_in_mobile">Mi nombre es</span>{" "}
            <span className="show_in_mobile">Soy</span> Camila Pletscher.
          </p>
          <p className={styles.profession}>
            Desarrolladora Front End / Diseñadora gráfica
          </p>
          <div className="show_in_mobile">
          <p className={styles.description}>
            Estudié en la Universidad Nacional de Lanús mi licenciatura y en
            Coderhouse la carrera de Desarrollo Front End. Soy muy metodica y
            organizada. {read ? (<span className={styles.read_more}>Y disfruto mucho encontrar solucion a los problemas. Es
            por eso que a punto de concluir mi camino en la UnLa descubri que mi
            futuro profesional estaria en la programación, pero sin alejarme del
            todo del diseño digital. Soy una gran apasionada por el deporte no solo para practicarlo sino también para observarlo. Mis momentos favoritos siempre son rodeada de mis seres queridos. <div onClick={() => setRead(!read)}>Leer menos</div> </span>) : <div onClick={() => setRead(!read)}>Leer más</div>} 
          </p>
          </div>
          <div className="hide_in_mobile">
          <p className={styles.description}>
            Estudié en la Universidad Nacional de Lanús mi licenciatura y en
            Coderhouse la carrera de Desarrollo Front End. Soy muy metódica y
            organizada. Y disfruto mucho encontrar solución a los problemas. Es
            por eso que a punto de concluir mi camino en la UnLa descubrí que mi
            futuro profesional estaría en la programación, pero sin alejarme del
            todo del diseño digital. Soy una gran apasionada por el deporte no solo para practicarlo sino también para observarlo. Mis momentos favoritos siempre son rodeada de mis seres queridos.
          </p>
          </div>
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
                <div>
                  <p>Behance</p>
                </div>
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
                <div>
                  <p>Git hub</p>
                </div>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/camila-pletscher-537b06177/"
              target={"_blank"}
              rel="noreferrer"
            >
              <div className={styles.cont_red}>
                <div>
                  <img
                    src="https://i.postimg.cc/c4k521Ff/Mesa-de-trabajo-22in.png"
                    alt=""
                  ></img>
                </div>
                <div>
                  <p>Linkedin</p>
                </div>
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
