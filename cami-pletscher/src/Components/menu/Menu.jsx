import React, { useState } from "react";
import Logo from "../logo/Logo";

import styles from "./menu.module.css";

function Menu(props) {
  const [menu, setMenu] = useState(false);

  

  return (
    <div className={styles.container_logo_nav}>
      <div className={styles.container_logo}>
        <Logo />
      </div>

      <div className={styles.container_nav}>
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
          <div onClick={()=>setMenu(!menu)} className={styles.back_menu}></div>
          <div className={styles.container_nav_mob}>
            <div className={styles.container_link_mob}>
              <div onClick={props.scrollToAbout}>
                <p onClick={()=>setMenu(!menu)}>SOBRE MI</p>
              </div>
              <div onClick={props.scrollToServices}>
                <p onClick={()=>setMenu(!menu)}>SERVICIOS</p>
              </div>
              <div onClick={props.scrollToPortfolio}>
                <p onClick={()=>setMenu(!menu)}>PORTFOLIO</p>
              </div>
              <div onClick={props.scrollToSkills}>
                <p onClick={()=>setMenu(!menu)}>SKILLS</p>
              </div>
              <div onClick={props.scrollToAchievements}>
                <p onClick={()=>setMenu(!menu)}>LOGROS</p>
              </div>
              <div onClick={props.scrollToContact}>
                <p onClick={()=>setMenu(!menu)}>CONTACTO</p>
              </div>
            </div>

            <div onClick={() => setMenu(!menu)}>
              <i class="material-icons">close</i>
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
