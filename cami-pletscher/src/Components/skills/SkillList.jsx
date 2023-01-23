import React from "react";
import SkillItem from "./SkillItem";
import styles from "./skill.module.css";

function SkillList(props) {
  return (
    <div className={styles.container_divs_skills}>
      {props.skills.map((skill) => (
        <SkillItem key={skill.id} icon={skill.icon} title={skill.title} />
      ))}
    </div>
  );
}

export default SkillList;
