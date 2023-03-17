import React from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";

function Home() {
  return (
  <div>
    <div>
      <div className={styles.container_logo}>
        <img src="https://i.postimg.cc/vZP57FxV/Principal.png" alt=""></img>
      </div>
      <div>
        NAV
      </div>
    </div>
    <div>
    <div className={styles.container_izq}>
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

        </div>
      </div>
      <div className={styles.container_profile}>
        <img
          className={styles.hide}
          src="https://i.postimg.cc/ZYV3MM3x/home.png"
          alt=""
        ></img>
      </div>
    </div>
  </div>





  );
}

export default Home;
