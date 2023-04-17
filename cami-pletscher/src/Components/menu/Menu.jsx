import React, { useEffect, useState } from "react";
import Logo from "../logo/Logo";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./menu.module.css";

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
          <p>SOBRE MI</p>
        </div>
        <div onClick={props.scrollToServices}>
          <p>SERVICIOS</p>
        </div>
        <div onClick={props.scrollToPortfolio}>
          <p>PORTFOLIO</p>
        </div>
        <div onClick={props.scrollToSkills}>
          <p>SKILLS</p>
        </div>
        <div onClick={props.scrollToAchievements}>
          <p>LOGROS</p>
        </div>
        <div onClick={props.scrollToContact}>
          <p>CONTACTO</p>
        </div>
      </div>
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
              <div onClick={props.scrollToServices}>
                <p onClick={() => setMenu(!menu)}>SERVICIOS</p>
              </div>
              <div onClick={props.scrollToPortfolio}>
                <p onClick={() => setMenu(!menu)}>PORTFOLIO</p>
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
