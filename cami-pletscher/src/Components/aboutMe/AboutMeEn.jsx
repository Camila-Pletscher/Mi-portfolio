import React, { useEffect, useState } from "react";
import styles from "./aboutme.module.css";
import "../styles/global.css";
import AOS from "aos";
import "aos/dist/aos.css";
import cv from "../../Camila-Pletscher-2024-EN.pdf";
import EducationEn from "../education/EducationEn";
import ExperienceEn from "../experience/ExperienceEn";

function AboutMeEn(props) {
  useEffect(() => {
    AOS.init();
  }, []);

  const [read, setRead] = useState(false);

  return (
    <div className={styles.container_about}>
      <div data-aos="fade-up" data-aos-duration="3000" className="cont_title">
        <img
          src="https://i.postimg.cc/y8dXhjhN/Mesa-de-trabajo-1-copia.png"
          alt="about me"
        ></img>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className={styles.cont_img_info}
      >
        <div className={styles.cont_left}>
          <div className={styles.cont_img_prof}>
            <img
              src="https://i.postimg.cc/527Ht2vr/selfie-fondo-cuad-2.png"
              alt=""
            ></img>
          </div>
          <div className={styles.cont_redes}>
            <a
              href="https://www.behance.net/camilapletscher1"
              target={"_blank"}
              rel="noreferrer"
            >
              <div className={styles.cont_red}>
                <img
                  src="https://i.postimg.cc/Y0hFRMc4/be-negroaboutme.png"
                  alt=""
                ></img>
              </div>
            </a>
            <a
              href="https://github.com/Camila-Pletscher"
              target={"_blank"}
              rel="noreferrer"
            >
              <div className={styles.cont_red}>
                <img
                  src="https://i.postimg.cc/7Zvz3FK6/github-negroaboutme.png"
                  alt=""
                ></img>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/camila-pletscher-537b06177/"
              target={"_blank"}
              rel="noreferrer"
            >
              <div className={styles.cont_red}>
                <img
                  src="https://i.postimg.cc/tCnPVqtw/in-negroaboutme.png"
                  alt=""
                ></img>
              </div>
            </a>
          </div>
        </div>
        <div className={styles.cont_description}>
          <p className={styles.name}>
            <span className="hide_in_mobile">My name is</span>{" "}
            <span className="show_in_mobile">I'm</span> Camila Pletscher.
          </p>
          <p className={styles.profession}>
            Front end developer / Graphic designer
          </p>

          <div className="show_in_mobile">
            <p className={styles.description}>
              I graduated as <b>Graphic Designer</b> from Universidad Nacional de Lanús and <b>Front End developer</b> from Coderhouse.{" "}
              {read ? (
                <span className={styles.read_more}>
                At the end of my course of studies, I discovered programming and I decided to start my professional career as a{" "}
                  <span className="italic">developer and web designer. </span>
                  I am a problem solving and detail-oriented person. I love practising and watching any kind of sports
              and my favorite moments are always with my relatives and friends.
                  <div onClick={() => setRead(!read)}>Leer menos (-)</div>{" "}
                </span>
              ) : (
                <div onClick={() => setRead(!read)}>Leer más (+)</div>
              )}
            </p>
          </div>
          <div className="hide_in_mobile">
            <p className={styles.description}>
              I graduated as <b>Graphic Designer</b> from Universidad Nacional de Lanús and <b>Front End developer</b> from Coderhouse. At the end of my course of studies, I discovered programming and I decided to start my professional career as a{" "}
              <span className="italic">developer and web designer.</span> I am a problem solving and detail-oriented person. I love practising and watching any kind of sports
              and my favorite moments are always with my relatives and friends.
            </p>
          </div>

          <div className={styles.container_buttons}>
            <button>
              <a href={cv} download="Camila-Pletscher-CV">
                {""}
                Download cv
              </a>
            </button>
            <button onClick={props.scrollToContact}>Contact me</button>
          </div>
        </div>
      </div>

      <div className="container">
        <EducationEn />
      </div>

      <div className="container">
        <ExperienceEn />
      </div>
    </div>
  );
}

export default AboutMeEn;
