import React, { useEffect, useState } from "react";
import styles from "./skill.module.css";
import "../styles/global.css";
import SkillList from "./SkillList";
import AOS from "aos";
import "aos/dist/aos.css";
import Marquee from "react-fast-marquee";

function Skills() {
  useEffect(() => {
    AOS.init();
  }, []);

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
      <div data-aos="zoom-out" className="cont_title">
        <img
          src="https://i.postimg.cc/L6QfJ5BP/Mesa-de-trabajo-16.png"
          alt=""
        ></img>
      </div>
      <div className={styles.skillsContainer}>
<SkillList skills={skill} />

      </div>
        
      
    </div>
  );
}

export default Skills;
