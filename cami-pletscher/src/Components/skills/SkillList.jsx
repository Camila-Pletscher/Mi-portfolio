import React from "react";
import SkillItem from "./SkillItem";
import styles from "./skill.module.css";

function SkillList(props) {
  return (
    <>
      {props.skills.map((skill) => (
        <SkillItem key={skill.id} icon={skill.icon} title={skill.title} />
      ))}
    </>
  );
}

export default SkillList;
