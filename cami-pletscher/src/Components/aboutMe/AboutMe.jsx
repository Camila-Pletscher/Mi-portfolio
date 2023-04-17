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
        <div className={styles.cont_left}>
        <div className={styles.cont_img_prof}>
          <img
            src="https://i.postimg.cc/527Ht2vr/selfie-fondo-cuad-2.png"
            alt=""
          ></img>
        </div>
        <div className={styles.cont_redes}>
            <a
              href="https://www.behance.net/camilapletscher1"
              target={"_blank"}
              rel="noreferrer"
            >
              <div className={styles.cont_red}>

                  <img
                    src="https://i.postimg.cc/Y0hFRMc4/be-negroaboutme.png"
                    alt=""
                  ></img>

              </div>
            </a>
            <a
              href="https://github.com/Camila-Pletscher"
              target={"_blank"}
              rel="noreferrer"
            >
              <div className={styles.cont_red}>

                  <img
                    src="https://i.postimg.cc/7Zvz3FK6/github-negroaboutme.png"
                    alt=""
                  ></img>


              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/camila-pletscher-537b06177/"
              target={"_blank"}
              rel="noreferrer"
            >
              <div className={styles.cont_red}>

                  <img
                    src="https://i.postimg.cc/tCnPVqtw/in-negroaboutme.png"
                    alt=""
                  ></img>

              </div>
            </a>
          </div>

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
              Me gradué como <b>Licenciada en Diseño Gráfico</b> en la Universidad
              Nacional de Lanús y como <b>Desarrolladora Front End</b> en Coderhouse.{" "}
              {read ? (
                <span className={styles.read_more}>
                  
                  En la etapa final de mi carrera universitaria descubrí la
                  programación y decidí enfocar mi carrera en el <span className="italic">desarrollo y
                  diseño web. </span>
                  Soy una persona metódica y organizada que disfruta buscar y
                  encontrar soluciones. Me encanta practicar y mirar cualquier
                  tipo de deporte y mis momentos favoritos son siempre rodeada
                  de mis seres queridos.
                  <div onClick={() => setRead(!read)}>Leer menos (-)</div>{" "}
                </span>
              ) : (
                <div onClick={() => setRead(!read)}>Leer más (+)</div>
              )}
            </p>
          </div>
          <div className="hide_in_mobile">
            <p className={styles.description}>
              Me gradué como <b>Licenciada en Diseño Gráfico</b> en la Universidad
              Nacional de Lanús y como <b>Desarrolladora Front End</b> en Coderhouse. 
              En la etapa final de mi carrera universitaria descubrí la
              programación y decidí enfocar mi carrera en el <span className="italic">desarrollo y diseño
              web.</span> Soy una persona metódica y organizada que disfruta buscar y
              encontrar soluciones. Me encanta practicar y mirar cualquier tipo
              de deporte y mis momentos favoritos son siempre rodeada de mis
              seres queridos.
            </p>
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
