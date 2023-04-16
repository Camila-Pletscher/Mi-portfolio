import React, { useEffect } from "react";
import styles from "./education.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Education() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.container_education}>
      <div data-aos="zoom-out" className="cont_title">
        <img
          src="https://i.postimg.cc/4d1Hsxxm/Mesa-de-trabajo-13.png"
          alt=""
        ></img>
      </div>
      <div className={styles.cont_info_edu}>
        <div data-aos="zoom-in" className={styles.cont_design}>
          <div>
            <img src="https://i.postimg.cc/Fsqw318S/Group-14.png" alt=""></img>
          </div>
          <div>
            <p className={styles.one}>Febrero 2014 - Diciembre 2021</p>
            <p className={styles.two}>
              Licenciatura en Diseño y <br></br> Comunicación Visual
            </p>
            <p className={styles.three}>Universidad Nacional de Lanús</p>
          </div>
        </div>
        <div data-aos="zoom-in" className={styles.cont_dev}>
          <div>
            <img src="https://i.postimg.cc/Fs12Y0Wm/Group-13.png" alt=""></img>
          </div>
          <div>
            <p className={styles.one}>Noviembre 2021 - Julio 2022</p>
            <p className={styles.two}>
              Desarrollo Front End <br></br> React JS
            </p>
            <p className={styles.three}>Escuela digital Coderhouse</p>
          </div>
        </div>
        <div data-aos="zoom-in" className={styles.cont_dev}>
          <div>
            <img src="https://i.postimg.cc/Bn6xQT75/Group-18.png" alt=""></img>
          </div>
          <div>
            <p className={styles.one}>Marzo 2021 - Actualidad</p>
            <p className={styles.two}>
              Inglés <br></br> In Company
            </p>
            <p className={styles.three}>Lingua Universi</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
