import React from "react";
import { Link } from "react-router-dom";
import Menu from "../menu/Menu";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.container_home}>
      <Menu></Menu>
      <div className={styles.container_all}>
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
            <Link to="/start">
              <button className={styles.contact}>Conoce más</button>
            </Link>
            
          </div>
        </div>
        <div className={styles.container_profile}>
          <img
            className={styles.hide}
            src="https://i.postimg.cc/DZb2XkYn/home.png"
            alt=""
          ></img>
        </div>
      </div>
      <div className={styles.container_footer}>
        <div className={styles.cont_block_foot}>
          <div>Mi trabajo en</div>
          <div>
            <img src="https://i.postimg.cc/FHWT1GCV/Mesa-de-trabajo-4.png" alt=""></img>
          </div>
          <div>
            <img src="https://i.postimg.cc/YSvbFgJK/Mesa-de-trabajo-5.png" alt=""></img>
          </div>
          <div>
            <img src="https://i.postimg.cc/QMvSJC3B/Mesa-de-trabajo-6.png" alt=""></img>
          </div>
        </div>
        <div className={styles.line}>
          <img src="https://i.postimg.cc/25KGzw8L/Mesa-de-trabajo-10.png" alt=""></img>
        </div>
        <div className={styles.cont_block_foot}>
          <div>Encontrame en</div>
          <div>
            <img src="https://i.postimg.cc/rsvzs6Xt/Mesa-de-trabajo-7.png" alt=""></img>
          </div>
          <div>
            <img src="https://i.postimg.cc/wMt79qPp/Mesa-de-trabajo-7-copia.png" alt=""></img>
          </div>
          <div>
            <img src="https://i.postimg.cc/Y9DvcGdR/Mesa-de-trabajo-7-copia-2.png" alt=""></img>
          </div>
        </div>
        <div className={styles.line}>
          <img src="https://i.postimg.cc/25KGzw8L/Mesa-de-trabajo-10.png" alt=""></img>
        </div>
        <div className={styles.cont_block_foot}>
          <div>Encontrame en</div>
          <div>
            <img src="https://i.postimg.cc/rsvzs6Xt/Mesa-de-trabajo-7.png" alt=""></img>
          </div>
          <div>
            <img src="https://i.postimg.cc/wMt79qPp/Mesa-de-trabajo-7-copia.png" alt=""></img>
          </div>
          <div>
            <img src="https://i.postimg.cc/Y9DvcGdR/Mesa-de-trabajo-7-copia-2.png" alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
