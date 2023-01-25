import React from "react";
import styles from "./logros.module.css";

function LogroItem({ certificate, title, id, place, date }) {
  return (
    <div className={styles.cont_each_logro}>
      <div className={styles.cont_certificate_logro}>
        <a
          href={certificate}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={certificate} alt=""></img>
        </a>
      </div>
      <div className={styles.container_info}>
        <div className={styles.cont_title_logro}>
          <p>{title}</p>
        </div>
        <div className={styles.cont_place_logro}>
          <p>{place}</p>
        </div>
        <div className={styles.cont_date_logro}>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
}

export default LogroItem;
