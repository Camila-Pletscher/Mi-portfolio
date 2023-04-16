import React, { useState } from "react";
import styles from "./modal.module.css";

export default function ModalSkills(props) {
  const [modal, setModal] = useState(false);

  return (
    <>
      {modal ? (
        <div>
          <div
            onClick={() => setModal(false)}
            className={styles.back_menu}
          ></div>
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
            <div onClick={() => setModal(false)} className={styles.close}>
              <i class="material-icons">close</i>
            </div>
          </div>
        </div>
      ) : (
        <div onClick={() => setModal(!modal)} className={styles.view_all}>
          Ver todas
        </div>
      )}
    </>
  );
}
