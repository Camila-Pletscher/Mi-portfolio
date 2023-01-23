import React from "react";
import styles from "./skill.module.css";

function SkillItem({ icon, title, id }) {
  return (
    <div className={styles.cont_each_skill}>
      <div className={styles.cont_icon_skill}>
        <img src={icon} alt=""></img>
      </div>
      <div className={styles.cont_title_skill}>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default SkillItem;
