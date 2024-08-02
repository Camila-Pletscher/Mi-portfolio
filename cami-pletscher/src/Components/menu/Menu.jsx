import React, { useEffect, useState } from "react";
import Logo from "../logo/Logo";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./menu.module.css";
import { Link } from "react-router-dom";

function Menu(props) {
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
        <Logo />
      </div>

      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className={styles.container_nav}
      >
        <div onClick={props.scrollToAbout}>
          <p>Sobre mi</p>
        </div>
        {/* <div onClick={props.scrollToServices}>
          <p>Servicios</p>
        </div> */}
        <div onClick={props.scrollToPortfolio}>
          <p>Portafolio</p>
        </div>
        <div onClick={props.scrollToSkills}>
          <p>Skills</p>
        </div>
        <div onClick={props.scrollToAchievements}>
          <p>Logros</p>
        </div>
        <div onClick={props.scrollToContact}>
          <p>Contacto</p>
        </div>
      </div>
      <Link to="/startEn">
        {" "}
        <div className={styles.language}>
          <p>English</p>
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
                <p onClick={() => setMenu(!menu)}>SOBRE MI</p>
              </div>
              {/* <div onClick={props.scrollToServices}>
                <p onClick={() => setMenu(!menu)}>SERVICIOS</p>
              </div> */}
              <div onClick={props.scrollToPortfolio}>
                <p onClick={() => setMenu(!menu)}>PORTAFOLIO</p>
              </div>
              <div onClick={props.scrollToSkills}>
                <p onClick={() => setMenu(!menu)}>SKILLS</p>
              </div>
              <div onClick={props.scrollToAchievements}>
                <p onClick={() => setMenu(!menu)}>LOGROS</p>
              </div>
              <div onClick={props.scrollToContact}>
                <p onClick={() => setMenu(!menu)}>CONTACTO</p>
              </div>
            </div>
            <Link to="/startEn">
              {" "}
              <div className={styles.language_mobile}>
                <p>English</p>
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

export default Menu;
