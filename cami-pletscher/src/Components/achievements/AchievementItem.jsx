import React from "react";
import styles from "./achievements.module.css";

function AchievementItem({ certificate, title, id, place, date }) {
  return (
    <div className={styles.cont_each_achievement}>
      <div className={styles.cont_certificate_achievement}>
        <a
          href={certificate}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={certificate} alt=""></img>
        </a>
      </div>
      <div className={styles.container_info}>
        <div className={styles.cont_title_achievement}>
          <p>{title}</p>
        </div>
        <div className={styles.cont_place_achievement}>
          <p>{place}</p>
        </div>
        <div className={styles.cont_date_achievement}>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
}

export default AchievementItem;
