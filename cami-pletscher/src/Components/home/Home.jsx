import React from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.container_home}>
      <div className={styles.container_logo_txt}>
        <div className={styles.container_logo}>
          <img src="https://i.postimg.cc/vZP57FxV/Principal.png" alt=""></img>
        </div>
        <div className={styles.profile_mobile}>
          <img
            className={styles.show}
            src="https://i.postimg.cc/gkwZmJNB/selfie-fondo-cir.png"
            alt=""
          ></img>
        </div>
        <div className={styles.container_txt}>
          <div className={styles.cont_hola}>
            <p>HOLA!</p>
          </div>
          <div className={styles.cont_soy}>
            <p>
              SOY <span>CAMILA</span>
            </p>
          </div>
          <div className={styles.cont_anclaje}>
            <p>Graphic Designer & Front end developer</p>
          </div>
          <div className={styles.cont_description}>
            <p>Te invito a conocerme un poco más.</p>
          </div>
        </div>
        <div className={styles.container_buttons}>
          <button className={styles.download}>Descargar cv</button>
          <button className={styles.contact}>Contacto</button>
          <Link to="/about_me">
            <button className={styles.start}>
              <i className="large material-icons">keyboard_arrow_down</i>
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.container_profile}>
        <img
          className={styles.hide}
          src="https://i.postimg.cc/W1NByrWk/selfie-fondogris.png"
          alt=""
        ></img>
      </div>
    </div>
  );
}

export default Home;
