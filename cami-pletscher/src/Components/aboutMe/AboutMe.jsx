import React from "react";
import styles from "./aboutme.module.css"

function AboutMe() {
  return (
    <div className={styles.container_about}>
      <div className={styles.container_menu}>Menu</div>
      <div className={styles.container_about_right}>
        <div className={styles.cont_title}>
        <p>SOBRE MI</p></div>
        <div className={styles.cont_description}>
          <p>
            Mi nombre es <span>Camila Pletscher</span>. Desarrolladora Front End / Diseñadora
            gráfica <br></br><br></br>Estudié en la Universidad Nacional de Lanús mi
            licenciatura y en Coderhouse la carrera de Desarrollo Front End. Soy
            muy metodica y organizada. Y disfruto mucho encontrar solucion a los
            problemas. Es por eso que a punto de concluir mi camino en la UnLa
            descubri que mi futuro profesional estaria en la programación, pero
            sin alejarme del todo del diseño digital.{" "}
          </p>
        </div>
        <div className={styles.container_table}>
        <div><p>Educación</p></div>
          {/* Educacion */}
          <div className={styles.container_education}>
          
            <div className={styles.cont_design}>
              <div>icono</div>
              <div>
                <p>Febrero 2014 - Diciembre 2021</p>
                <p>Licenciatura en Diseño y Comunicación Visual</p>
                <p>Universidad Nacional de Lanús</p>
              </div>
            </div>
            <div className={styles.cont_dev}>
              <div>icono</div>
              <div>
                <p>Febrero 2014 - Diciembre 2021</p>
                <p>Licenciatura en Diseño y Comunicación Visual</p>
                <p>Universidad Nacional de Lanús</p>
              </div>
            </div>
          </div>
          {/* Experiencia */}
          <p>Experiencia</p>
          <div className={styles.container_experience}>
            <div>
              <div>icono</div>
              <div>
                <p>Febrero 2014 - Diciembre 2021</p>
                <p>Licenciatura en Diseño y Comunicación Visual</p>
                <p>Universidad Nacional de Lanús</p>
              </div>
            </div>
            <div>
              <div>icono</div>
              <div>
                <p>Febrero 2014 - Diciembre 2021</p>
                <p>Licenciatura en Diseño y Comunicación Visual</p>
                <p>Universidad Nacional de Lanús</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
