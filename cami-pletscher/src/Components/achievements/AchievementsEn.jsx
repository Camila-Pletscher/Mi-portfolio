import React, { useEffect, useState } from "react";
import styles from "./achievements.module.css";
import "../styles/global.css";
import AchievementList from "./AchievementList";
import AOS from "aos";
import "aos/dist/aos.css";

function AchievementsEn() {
  useEffect(() => {
    AOS.init();
  }, []);


  const [achievement, setachievement] = useState([]);

  useEffect(() => {
    fetch("../data/achievementsEn.json")
      .then((resp) => resp.json())
      .then((data) => {
        setachievement(data);
      });
  }, []);

  return (
    <div className={styles.container_achievements}>
        <div data-aos="zoom-out" className="cont_title">
          <img src="https://i.postimg.cc/Tw8V6Xzy/Mesa-de-trabajo-17-copia.png" alt="my achievements"></img>
        </div>
        <AchievementList achievements={achievement} />

    </div>
  );
}

export default AchievementsEn;
