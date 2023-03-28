import React from 'react'
import styles from './services.module.css'

function ServicesItem({image, title, text}) {
  return (
    <div className={styles.container_each_service}>
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