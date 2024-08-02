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
            <p className={styles.one}>Graphic Designer</p>
            <p className={styles.two}>Chiappini + Becker</p>
            <p className={styles.three}>
              Design of various graphic pieces for companies such as Boehringer
              Ingelheim, Teva, Astrazeneca, Vifor and others.
            </p>
            <p className={styles.three}>
              Email marketing development for companies such as Boehringer
              Ingelheim and Astrazeneca.
            </p>
          </div>
          <div className={styles.plinth}>May 2021 - January 2022</div>
        </div>
        <div data-aos="zoom-in" className={styles.cont_each_exp}>
          <div className={styles.pad_txt}>
            <p className={styles.one}>Front End developer</p>
            <p className={styles.two}>MRM McCann group</p>
            <p className={styles.three}>
              Email marketing development for General Motors.
            </p>
            <p className={styles.three}>
              Support for websites with JavaScript.
            </p>
            <p className={styles.three}>
              Developing the Open Peds application "Learn Peritoneal Dialysis"
              with ReactJs.
            </p>
          </div>
          <div className={styles.plinth}>January 2022 - October 2023</div>
        </div>
        <div data-aos="zoom-in" className={styles.cont_each_exp}>
          <div className={styles.pad_txt}>
            <p className={styles.one}>Front End developer (SAP BTP/UI5)</p>
            <p className={styles.two}>Accenture</p>
            <p className={styles.three}>
              Development of UI5 applications using JavaScript within SAP BTP
              environment.{" "}
            </p>
            <p className={styles.three}>
              Collaboration in agile teams for project delivery.
            </p>
            <p className={styles.three}>
              Optimization of UI5 application performance.
            </p>
            <p className={styles.three}>
              Maintenance and troubleshooting of existing applications.
            </p>
            <p className={styles.three}>
              Integration of UI5 components with back-end systems.
            </p>
            <p className={styles.three}>
              Creation of UI5 component prototypes using Figma.
            </p>
          </div>
          <div className={styles.plinth}>October 2023 - Present</div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceEn;
