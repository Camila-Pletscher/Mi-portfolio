import React, { useEffect, useState } from "react";
import Menu from "../menu/Menu";
import styles from "./skill.module.css";
import "../styles/global.css";
import SkillList from "./SkillList";

function Skills() {
  const [menu, setmenu] = useState(true);

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
      {/* <div className="show" onClick={() => setmenu(!menu)}>
        menu
      </div>
      {menu && (
        <div className={styles.container_menu}>
          <Menu />
        </div>
      )} */}
      <div className="cont_title"> 
        <img src="https://i.postimg.cc/L6QfJ5BP/Mesa-de-trabajo-16.png" alt=""></img>
      </div>
      <div className={styles.container_skills_all}>
        <div className={styles.skills_scroll} >
          <div className={styles.marquee_container}>
          <div className={styles.marquee}>
            <SkillList skills={skill} />
          </div>
            
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default Skills;
