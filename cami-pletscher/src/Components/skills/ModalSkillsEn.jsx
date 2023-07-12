import React, { useState } from "react";
import styles from "./modal.module.css";

export default function ModalSkillsEn(props) {
  const [modal, setModal] = useState(false);

  function over() {
    setModal(!modal);
    document.body.style.overflow = "hidden";
  }

  function overOut() {
    setModal(false);
    document.body.style.overflow = "auto";
  }

  return (
    <>
      {modal ? (
        <div>
          <div onClick={() => overOut()} className={styles.back_menu}></div>
          <div className={styles.container_modal}>
            <div className={styles.display}>
              {props.skills.map((skill) => (
                <div className={styles.each_skill}>
                  <div>
                    <img src={skill.icon} alt={skill.title}></img>
                  </div>
                  <div className={styles.title}>{skill.title}</div>
                </div>
              ))}
            </div>
            <div onClick={() => overOut()} className={styles.close}>
              <i class="material-icons">close</i>
            </div>
          </div>
        </div>
      ) : (
        <div onClick={() => over()} className={styles.view_all}>
          View all
        </div>
      )}
    </>
  );
}
