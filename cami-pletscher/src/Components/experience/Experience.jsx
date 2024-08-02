import React, { useEffect } from "react";
import styles from "./experience.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Experience() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={styles.container_experience}>
      <div data-aos="zoom-out" className="cont_title">
        <img
          src="https://i.postimg.cc/Hxm8qyHq/Mesa-de-trabajo-12.png"
          alt="my experiencia"
        ></img>
      </div>
      <div className={styles.cont_info_exp}>
        <div data-aos="zoom-in" className={styles.cont_each_exp}>
          <div className={styles.pad_txt}>
            <p className={styles.one}>Diseñadora gráfica</p>
            <p className={styles.two}>Chiappini + Becker Comunicación</p>
            <p className={styles.three}>
              Diseño de piezas gráficas para empresas como Boehringer Ingelheim,
              Teva, Astrazenca, Vifor, entre otros.
            </p>
            <p className={styles.three}>
              Diseño y desarrollo de email marketing para empresas como
              Boehringer Ingelheim y Astrazenca.
            </p>
          </div>
          <div className={styles.plinth}>Mayo 2021 - Enero 2022</div>
        </div>
        <div data-aos="zoom-in" className={styles.cont_each_exp}>
          <div className={styles.pad_txt}>
            <p className={styles.one}>Desarrolladora Front End</p>
            <p className={styles.two}>MRM grupo McCann</p>
            <p className={styles.three}>
              Desarrollo de email marketing para General Motors.
            </p>
            <p className={styles.three}>
              Mantenimiento de sitios con JavaScript.
            </p>
            <p className={styles.three}>
              Desarrollo de aplicación Open Peds “Learn Peritoneal Dialysis” con
              ReactJs.
            </p>
          </div>
          <div className={styles.plinth}>Enero 2022 - Octubre 2023</div>
        </div>
        <div data-aos="zoom-in" className={styles.cont_each_exp}>
          <div className={styles.pad_txt}>
            <p className={styles.one}>Front End developer (SAP BTP/UI5)</p>
            <p className={styles.two}>Accenture</p>
            <p className={styles.three}>
              Desarrollo de aplicaciones UI5 con Javascript en entorno SAP BTP.
            </p>
            <p className={styles.three}>
              Colaboración en equipos ágiles para entrega de proyectos.
            </p>
            <p className={styles.three}>
              Optimización de rendimiento de aplicaciones UI5.
            </p>
            <p className={styles.three}>
              Mantenimiento y resolución de problemas en aplicaciones
              existentes.
            </p>
            <p className={styles.three}>
              Integración de componentes UI5 con sistemas back-end.
            </p>
            <p className={styles.three}>
              Creación de prototipos con componentes de UI5 utilizando Figma.
            </p>
          </div>
          <div className={styles.plinth}>Octubre 2023 - Actualidad</div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
