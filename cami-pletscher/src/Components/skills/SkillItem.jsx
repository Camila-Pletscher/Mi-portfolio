import React from "react";
import styles from "./skill.module.css";

function SkillItem({ icon, title, id }) {
  return (

      <div className={styles.skill_box}>
      <img src={icon} alt=""></img>

      <p>{title}</p>
    </div>

  );
}

export default SkillItem;
