import React, { useEffect, useState } from "react";
import styles from "./skill.module.css";
import "../styles/global.css";
import SkillList from "./SkillList";

function Skills() {

  const [skill, setSkill] = useState([]);

  useEffect(() => {
    fetch("../data/skill.json")
      .then((resp) => resp.json())
      .then((data) => {
        setSkill(data);
      });
  }, []);

  return (
    <div className={styles.container_skills}>
      <div className="cont_title">
        <img
          src="https://i.postimg.cc/L6QfJ5BP/Mesa-de-trabajo-16.png"
          alt=""
        ></img>
      </div>
      <div className={styles.container_skills_all}>
        <SkillList skills={skill} />
      </div>
    </div>
  );
}

export default Skills;
