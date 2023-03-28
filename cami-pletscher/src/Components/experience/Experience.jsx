import React, { useEffect } from "react";
import styles from './experience.module.css';
import AOS from "aos";
import "aos/dist/aos.css";

function Experience() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
      <div className={styles.container_experience}>
      <div data-aos="zoom-out" className='cont_title'>
        <img src="https://i.postimg.cc/Hxm8qyHq/Mesa-de-trabajo-12.png" alt=""></img>
      </div>
        <div  className={styles.cont_info_exp}>

        <div data-aos="zoom-in" className={styles.cont_each_exp}>
          <div className={styles.pad_txt}>
            <p className={styles.one}>Diseñadora gráfica</p>
            <p className={styles.two}>Chiappini + Becker Comunicación</p>
            <p className={styles.three}>Diseño de piezas gráficas y desarrollo de email marketing para empresas como Boehringer Ingelheim, Teva, Astrazenca, Vifor, entre otros.</p>
          </div>
          <div className={styles.plinth}>Mayo 2021 - Enero 2022</div>
        </div>
        <div data-aos="zoom-in" className={styles.cont_each_exp}>
        <div className={styles.pad_txt}>
            <p className={styles.one}>Diseñadora gráfica Freelance</p>
            <p className={styles.two}>IMAGENCIA</p>
            <p className={styles.three}>Diseño de contenido para redes sociales.</p>
          </div>
          <div className={styles.plinth}>Septiembre 2021 - Enero 2022</div>
        </div>
        <div data-aos="zoom-in" className={styles.cont_each_exp}>
        <div className={styles.pad_txt}>
            <p className={styles.one}>Desarrolladora web</p>
            <p className={styles.two}>MRM grupo McCann</p>
            <p className={styles.three}>Desarrollo de email marketing para General Motors. Mantenimiento de sitios con JavaScript.
Desarrollo de aplicación Open Peds “Learn Peritoneal Dialysis” con ReactJs.</p>
          </div>
          <div className={styles.plinth}>Enero 2022 - Actualidad</div>
        </div>
        </div>
      </div>
  );
}

export default Experience;
