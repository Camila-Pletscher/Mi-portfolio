import React, { useEffect } from "react";
import styles from "./achievements.module.css";
import AchievementItem from "./AchievementItem";
import AOS from "aos";
import "aos/dist/aos.css";

function AchievementList(props) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="flip-left" data-aos-duration="2000" className={styles.container_divs_achievements}>
      {props.achievements.map((achievement) => (
        <AchievementItem key={achievement.id} {...achievement} />
      ))}
    </div>
  );
}

export default AchievementList;
