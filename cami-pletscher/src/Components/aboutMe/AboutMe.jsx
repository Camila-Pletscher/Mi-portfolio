import React, { useState } from "react";
import Menu from "../menu/Menu";
import styles from "./aboutme.module.css";
import "../styles/global.css";

function AboutMe() {
  const [menu, setmenu] = useState(true);

  return (
    <div className={styles.container_about}>
      <div className="show" onClick={() => setmenu(!menu)}>
        menu
      </div>
      {menu && (
        <div className={styles.container_menu}>
          <Menu />
        </div>
      )}
      <div className={styles.container_about_info}>
        {!menu && (
          <div>
            <p>Menu cerrado</p>
          </div>
        )}
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
            <p className={styles.profesion}>
              Desarrolladora Front End / Diseñadora gráfica
            </p>
            <p className={styles.descripcion}>
              Estudié en la Universidad Nacional de Lanús mi licenciatura y en
              Coderhouse la carrera de Desarrollo Front End. Soy muy metodica y
              organizada. Y disfruto mucho encontrar solucion a los problemas.
              Es por eso que a punto de concluir mi camino en la UnLa descubri
              que mi futuro profesional estaria en la programación, pero sin
              alejarme del todo del diseño digital
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
        <div className={styles.container_table}>
          <div className={styles.cont_subtitle}>
            <p>Educación</p>
          </div>
          {/* Educacion */}
          <div className={styles.container_education}>
            <div className={styles.cont_design}>
              <div>
                <img
                  src="https://i.postimg.cc/W3C69S2M/design.png"
                  alt=""
                ></img>
              </div>
              <div>
                <p className={styles.one}>Febrero 2014 - Diciembre 2021</p>
                <p className={styles.two}>
                  Licenciatura en Diseño y <br></br> Comunicación Visual
                </p>
                <p className={styles.three}>Universidad Nacional de Lanús</p>
              </div>
            </div>
            <div className={styles.container_line}>
              <img
                src="https://i.postimg.cc/pVsFCsL4/Vector-3.png"
                alt="line"
              ></img>
            </div>
            <div className={styles.cont_dev}>
              <div>
                <img src="https://i.postimg.cc/25jw3VcB/dev.png" alt=""></img>
              </div>
              <div>
                <p className={styles.one}>Noviembre 2021 - Julio 2022</p>
                <p className={styles.two}>
                  Desarrollo Front End <br></br> React JS
                </p>
                <p className={styles.three}>Escuela digital Coderhouse</p>
              </div>
            </div>
          </div>
          {/* Experiencia */}
          <div className={styles.cont_subtitle}>
            <p>Experiencia</p>
          </div>

          <div className={styles.container_experience}>
            <div className={styles.cont_chiappini}>
              <div>
                <p className={styles.one}>
                  Mayo 2021 - <br></br> Enero 2022
                </p>
                <p className={styles.two}>Diseñadora gráfica</p>
                <p className={styles.three}>Chiappini + Becker Comunicación</p>
              </div>
            </div>
            <div className={styles.container_line}>
              <img
                src="https://i.postimg.cc/pVsFCsL4/Vector-3.png"
                alt="line"
              ></img>
            </div>
            <div className={styles.cont_mrm}>
              <div>
                <p className={styles.one}>
                  Enero 2022 - <br></br>Actualidad
                </p>
                <p className={styles.two}>Desarrolladora web</p>
                <p className={styles.three}>MRM grupo McCann</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
