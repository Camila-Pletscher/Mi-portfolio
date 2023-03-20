import React, { useEffect, useState } from "react";
import styles from "./achievements.module.css";
import "../styles/global.css";
import AchievementList from "./AchievementList";

function Achievements() {


  const [achievement, setachievement] = useState([]);

  useEffect(() => {
    fetch("../data/achievements.json")
      .then((resp) => resp.json())
      .then((data) => {
        setachievement(data);
      });
  }, []);

  return (
    <div className={styles.container_achievements}>
        <div className="cont_title">
          <img src="https://i.postimg.cc/bNwkYkb8/Mesa-de-trabajo-17.png" alt=""></img>
        </div>
        <AchievementList achievements={achievement} />

    </div>
  );
}

export default Achievements;
