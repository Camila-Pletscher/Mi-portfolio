import React, { useEffect } from "react";
import styles from "./education.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function EducationEn() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.container_education}>
      <div data-aos="zoom-out" className="cont_title">
        <img
          src="https://i.postimg.cc/GpTFVp5w/Mesa-de-trabajo-13-copia.png"
          alt=""
        ></img>
      </div>
      <div className={styles.cont_info_edu}>
        <div data-aos="zoom-in" className={styles.cont_design}>
          <div>
            <img src="https://i.postimg.cc/Fsqw318S/Group-14.png" alt=""></img>
          </div>
          <div>
            <p className={styles.one}>February 2014 - December 2021</p>
            <p className={styles.two}>
              Bachelor's degree in Design and Visual Communication{" "}
            </p>
            <p className={styles.three}>Universidad Nacional de Lanus</p>
          </div>
        </div>
        <div data-aos="zoom-in" className={styles.cont_dev}>
          <div>
            <img src="https://i.postimg.cc/Fs12Y0Wm/Group-13.png" alt=""></img>
          </div>
          <div>
            <p className={styles.one}>November 2021 - July 2022</p>
            <p className={styles.two}>
              Front End Development <br></br> React JS
            </p>
            <p className={styles.three}>Coderhouse</p>
          </div>
        </div>
        <div data-aos="zoom-in" className={styles.cont_dev}>
          <div>
            <img src="https://i.postimg.cc/Bn6xQT75/Group-18.png" alt=""></img>
          </div>
          <div>
            <p className={styles.one}>March 2022 - Present</p>
            <p className={styles.two}>
              English | Intermediate Level
            </p>
            <p className={styles.three}>Lingua Universi</p>
          </div>
        </div>
        <div data-aos="zoom-in" className={styles.cont_dev}>
          <div>
            <img src="https://i.postimg.cc/Fs12Y0Wm/Group-13.png" alt=""></img>
          </div>
          <div>
            <p className={styles.one}>July 2023 - Present</p>
            <p className={styles.two}>
              FullStack - JavaScript | Node JS
            </p>
            <p className={styles.three}>Codo a Codo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationEn;
