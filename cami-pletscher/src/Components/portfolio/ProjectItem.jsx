import React from "react";
import styles from "./projectItem.module.css";

function ProjectItem({ image, title, project, code, view, text, tools, gitHub }) {
  return (
    <div className={styles.container_item_project}>
      <div className={styles.container_info}>
        <div className={styles.cont_img_title}>
          <img src={image} alt=""></img>
          <div className={styles.filter}></div>
          <div className={styles.title}>
            <p>{title}</p>
          </div>
        </div>
      </div>
      <div className={styles.hover_action}>
        <p>{text}</p>
        <div className={styles.cont_buttons}>
        <div>
            <a href={gitHub} target="_blank" rel="noreferrer">
              <img src={code} alt=""></img>
          </a>
          </div>
          <div>
          <a href={project} target="_blank" rel="noreferrer">
              <img src={view} alt=""></img>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.hover_action_tech}>
        <p>{tools}</p>
      </div>
    </div>
  );
}

export default ProjectItem;
