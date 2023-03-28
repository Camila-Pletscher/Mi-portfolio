import React, { useEffect } from 'react'
import styles from './services.module.css'
import AOS from "aos";
import "aos/dist/aos.css";

function ServicesItem({image, title, text}) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="flip-left" data-aos-duration="1500" className={styles.container_each_service}>
          <div className={styles.cont_img}>
            <img
              src={image}
              alt=""
            ></img>
          </div>
          <div className={styles.serv_title}>
            <p>{title}</p>
          </div>
          <div className={styles.serv_text}>
            {" "}
            <p>
              {text}
            </p>
          </div>
        </div>
  )
}

export default ServicesItem