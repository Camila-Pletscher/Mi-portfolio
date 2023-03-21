import React, { useState } from "react";
import Education from "../education/Education";
import Experience from "../experience/Experience";
import styles from "./aboutme.module.css";
import "../styles/global.css";
import Portfolio from "../portfolio/Portfolio";

function AboutMe() {
  const [menu, setmenu] = useState(true);

  return (
    <div className={styles.container_about}>
      <div className="cont_title">
        <img
          src="https://i.postimg.cc/6pDvhPP5/Mesa-de-trabajo-1.png"
          alt="about me"
        ></img>
      </div>
      <div className={styles.cont_img_info}>
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
            <div className={styles.cont_red}>
              <div>
                <img
                  src="https://i.postimg.cc/50TL2qYj/Mesa-de-trabajo-6-copia.png"
                  alt=""
                ></img>
              </div>
              <div>Behance</div>
            </div>
            <div className={styles.cont_red}>
              <div>
                <img
                  src="https://i.postimg.cc/gJn3pB0f/Mesa-de-trabajo-4-copia.png"
                  alt=""
                ></img>
              </div>
              <div>Git hub</div>
            </div>
            <div className={styles.cont_red}>
              <div>
                <img
                  src="https://i.postimg.cc/434zL3R4/Mesa-de-trabajo-22.png"
                  alt=""
                ></img>
              </div>
              <div>workana</div>
            </div>
          </div>
          <div className={styles.container_buttons}>
            <button>Descargar cv</button>
            <button>Contacto</button>
          </div>
        </div>
      </div>

      {/* Educacion */}
      <div className={styles.container_edu}>
        <Education />
      </div>
      {/* Experiencia */}
      <div>
        <Experience />
      </div>
    </div>
  );
}

export default AboutMe;
