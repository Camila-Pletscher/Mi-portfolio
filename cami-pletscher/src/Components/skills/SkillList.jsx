import React from "react";
import SkillItem from "./SkillItem";
import Marquee from 'react-fast-marquee';
import styles from "./skill.module.css";

function SkillList(props) {
  return (
    <div className={styles.skillScroll}>
      <Marquee pauseOnHover={true} speed={40}>
      {props.skills.map((skill) => (
        <SkillItem key={skill.id} icon={skill.icon} title={skill.title} />
      ))}
    </Marquee>
    </div>
  );
}

export default SkillList;
