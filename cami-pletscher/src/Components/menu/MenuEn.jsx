import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./menu.module.css";
import LogoEn from "../logo/LogoEn";
import { Link } from "react-router-dom";

function MenuEn(props) {
  useEffect(() => {
    AOS.init();
  }, []);

  const [menu, setMenu] = useState(false);

  return (
    <div className={styles.container_logo_nav}>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className={styles.container_logo}
      >
        <LogoEn />
      </div>

      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className={styles.container_nav}
      >
        <div onClick={props.scrollToAbout}>
          <p>About me</p>
        </div>
        {/* <div onClick={props.scrollToServices}>
          <p>Services</p>
        </div> */}
        <div onClick={props.scrollToPortfolio}>
          <p>Portfolio</p>
        </div>
        <div onClick={props.scrollToSkills}>
          <p>Skills</p>
        </div>
        <div onClick={props.scrollToAchievements}>
          <p>Achievements</p>
        </div>
        <div onClick={props.scrollToContact}>
          <p>Contact</p>
        </div>
      </div>

      <Link to="/start">
        {" "}
        <div className={styles.language}>
          <p>Español</p>
          <i class="tiny material-icons">language</i>
        </div>
      </Link>

      {menu ? (
        <>
          <div
            onClick={() => setMenu(!menu)}
            className={styles.back_menu}
          ></div>
          <div className={styles.container_nav_mob}>
            <div onClick={() => setMenu(!menu)} className={styles.close}>
              <i class="material-icons">close</i>
            </div>
            <div className={styles.logo_mob}>
              <img
                src="https://i.postimg.cc/2SWK9vPB/Circular-blanco.png"
                alt=""
              ></img>
            </div>

            <div className={styles.container_link_mob}>
              <div onClick={props.scrollToAbout}>
                <p onClick={() => setMenu(!menu)}>ABOUT ME</p>
              </div>
              {/* <div onClick={props.scrollToServices}>
                <p onClick={() => setMenu(!menu)}>SERVICES</p>
              </div> */}
              <div onClick={props.scrollToPortfolio}>
                <p onClick={() => setMenu(!menu)}>PORTFOLIO</p>
              </div>
              <div onClick={props.scrollToSkills}>
                <p onClick={() => setMenu(!menu)}>SKILLS</p>
              </div>
              <div onClick={props.scrollToAchievements}>
                <p onClick={() => setMenu(!menu)}>ACHIEVEMENTS</p>
              </div>
              <div onClick={props.scrollToContact}>
                <p onClick={() => setMenu(!menu)}>CONTACT</p>
              </div>
            </div>
            <Link to="/start">
              {" "}
              <div className={styles.language_mobile}>
                <p>Español</p>
                <i class="tiny material-icons">language</i>
              </div>
            </Link>
          </div>
        </>
      ) : (
        <div className={styles.icon_menu} onClick={() => setMenu(!menu)}>
          {" "}
          <i class="material-icons">menu</i>
        </div>
      )}
    </div>
  );
}

export default MenuEn;
