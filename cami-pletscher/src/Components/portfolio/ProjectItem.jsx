import React from "react";
import { Link } from "react-router-dom";
import styles from './projectItem.module.css';

function ProjectItem({ image, id, title, video, code, play }) {
  return (
    <div className={styles.container_item_project}>
      <div className={styles.cont_img_title}>
        <img src={image} alt=""></img>
        <div className={styles.filter}></div>
        <div className={styles.title}>
        <p>{title}</p></div>
      </div>

      <div className={styles.cont_buttons}>
        <div>
          <Link to={video}>
            <img src={code} alt=""></img>
            
          </Link>
        </div>
        <div>
          <Link to={code}>
            <img src={play} alt=""></img>
            
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
