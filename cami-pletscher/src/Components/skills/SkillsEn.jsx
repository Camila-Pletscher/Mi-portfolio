import React, { useEffect, useState } from "react";
import styles from "./skill.module.css";
import "../styles/global.css";
import SkillList from "./SkillList";
import AOS from "aos";
import "aos/dist/aos.css";
import ModalSkillsEn from "./ModalSkillsEn";

function SkillsEn() {
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
          src="https://i.postimg.cc/V6jjsVwK/Mesa-de-trabajo-16-copia.png"
          alt="my skills"
        ></img>
      </div>
      <div className={styles.skills_container}>
        <SkillList skills={skill} />
      </div>
      <div className={styles.skillsModal_container}>
        <ModalSkillsEn skills={skill} />
      </div>
    </>
  );
}

export default SkillsEn;
