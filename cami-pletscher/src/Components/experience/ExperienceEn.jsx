import React, { useEffect } from "react";
import styles from "./experience.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function ExperienceEn() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={styles.container_experience}>
      <div data-aos="zoom-out" className="cont_title">
        <img
          src="https://i.postimg.cc/WzT0dwbT/Mesa-de-trabajo-12-copia.png"
          alt="work experience"
        ></img>
      </div>
      <div className={styles.cont_info_exp}>
        <div data-aos="zoom-in" className={styles.cont_each_exp}>
          <div className={styles.pad_txt}>
            <p className={styles.one}>Web developer</p>
            <p className={styles.two}>MRM McCann group</p>
            <p className={styles.three}>
              Email marketing development for General Motors. Support for
              websites with JavaScript. Developing the Open Peds application
              "Learn Peritoneal Dialysis" with ReactJs.
            </p>
          </div>
          <div className={styles.plinth}>January 2022 - Currently</div>
        </div>

        <div data-aos="zoom-in" className={styles.cont_each_exp}>
          <div className={styles.pad_txt}>
            <p className={styles.one}>Graphic Designer</p>
            <p className={styles.two}>Chiappini + Becker</p>
            <p className={styles.three}>
              Design of various graphic pieces. Email marketing development for
              companies such as Boehringer Ingelheim, Teva, Astrazeneca, Vifor
              and others.
            </p>
          </div>
          <div className={styles.plinth}>May 2021 - January 2022</div>
        </div>
        <div data-aos="zoom-in" className={styles.cont_each_exp}>
          <div className={styles.pad_txt}>
            <p className={styles.one}>Graphic Designer Freelance</p>
            <p className={styles.two}>IMAGENCIA</p>
            <p className={styles.three}>Social media content design</p>
          </div>
          <div className={styles.plinth}>September 2021 - January 2022</div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceEn;
