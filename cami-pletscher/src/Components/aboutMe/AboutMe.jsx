import React from "react";
import Menu from "../menu/Menu";
import styles from "./aboutme.module.css";

function AboutMe() {
  return (
    <div className={styles.container_about}>
      <div className={styles.container_menu}>
        <Menu />
      </div>
      <div className={styles.container_about_right}>
        <div className={styles.cont_title}>
          <p>SOBRE MI</p>
        </div>
        <div className={styles.cont_description}>
          <p>
            Mi nombre es <span>Camila Pletscher</span>. Desarrolladora Front End
            / Diseñadora gráfica <br></br>
            <br></br>Estudié en la Universidad Nacional de Lanús mi licenciatura
            y en Coderhouse la carrera de Desarrollo Front End. Soy muy metodica
            y organizada. Y disfruto mucho encontrar solucion a los problemas.
            Es por eso que a punto de concluir mi camino en la UnLa descubri que
            mi futuro profesional estaria en la programación, pero sin alejarme
            del todo del diseño digital.{" "}
          </p>
        </div>
        <div className={styles.container_table}>
          <div className={styles.cont_subtitle}>
            <p>Educación</p>
          </div>
          {/* Educacion */}
          <div className={styles.container_education}>
            <div className={styles.cont_design}>
              <div>
              <img src="https://i.postimg.cc/W3C69S2M/design.png" alt=""></img>
              </div>
              <div>
                <p className={styles.one}>Febrero 2014 - Diciembre 2021</p>
                <p className={styles.two}>Licenciatura en Diseño y <br></br> Comunicación Visual</p>
                <p className={styles.three}>Universidad Nacional de Lanús</p>
              </div>
            </div>
            <div className={styles.container_line}>
              <img src="https://i.postimg.cc/pVsFCsL4/Vector-3.png" alt="line"></img>
            </div>
            <div className={styles.cont_dev}>
              <div>
                <img src="https://i.postimg.cc/25jw3VcB/dev.png" alt=""></img>
              </div>
              <div>
                <p className={styles.one}>Noviembre 2021 - Julio 2022</p>
                <p className={styles.two}>Desarrollo Front End <br></br> React JS</p>
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
                <p className={styles.one}>Mayo 2021 - <br></br> Enero 2022</p>
                <p className={styles.two}>Diseñadora gráfica</p>
                <p className={styles.three}>Chiappini + Becker Comunicación</p>
              </div>
            </div>
            <div className={styles.container_line}>
              <img src="https://i.postimg.cc/pVsFCsL4/Vector-3.png" alt="line"></img>
            </div>
            <div className={styles.cont_mrm}>
              
              <div>
                <p className={styles.one}>Enero 2022 - <br></br>Actualidad</p>
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
