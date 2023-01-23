import React, { useEffect, useState } from "react";
import Menu from "../menu/Menu";
import styles from "./skill.module.css";
import "../styles/global.css";
import SkillList from "./SkillList";

function Skills() {
  const [menu, setmenu] = useState(true);

  const [skill, setSkill] = useState([]);

  useEffect(() => {
    fetch("../data/data.json")
      .then((resp) => resp.json())
      .then((data) => {
        setSkill(data);
      });
  }, []);

  return (
    <div className={styles.container_skills}>
      <div className="show" onClick={() => setmenu(!menu)}>
        menu
      </div>
      {menu && (
        <div className={styles.container_menu}>
          <Menu />
        </div>
      )}
      <div className={styles.container_skills_right}>
        <div className="cont_title">
          <p>SKILLS</p>
        </div>

        <SkillList skills={skill} />
      </div>
    </div>
  );
}

export default Skills;
