import React, { useEffect, useState } from "react";
import styles from "./skill.module.css";
import "../styles/global.css";
import SkillList from "./SkillList";
import AOS from "aos";
import "aos/dist/aos.css";
import ModalSkills from "./ModalSkills";

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
    <>
      <div data-aos="zoom-out" className="cont_title">
        <img
          src="https://i.postimg.cc/L6QfJ5BP/Mesa-de-trabajo-16.png"
          alt=""
        ></img>
      </div>
      <div className={styles.skills_container}>
        <SkillList skills={skill} />
      </div>
      <div className={styles.skillsModal_container}>
        <ModalSkills skills={skill} />
      </div>
    </>
  );
}

export default Skills;
