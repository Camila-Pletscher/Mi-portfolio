import React from "react";
import styles from "./achievements.module.css";
import AchievementItem from "./AchievementItem";

function AchievementList(props) {
  return (
    <div className={styles.container_divs_achievements}>
      {props.achievements.map((achievement) => (
        <AchievementItem key={achievement.id} {...achievement} />
      ))}
    </div>
  );
}

export default AchievementList;
