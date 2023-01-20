import React, { useState } from 'react'
import Menu from '../menu/Menu';
import styles from './skill.module.css';
import "../styles/global.css";

function Skills() {

  const [menu, setmenu] = useState(true);
  return (
    <div className={styles.container_skills}>
    <div className="show" onClick={()=> setmenu(!menu)}>
      menu
    </div>
      {menu && <div className={styles.container_menu}>
        <Menu />
      </div>
      }
      <div className={styles.container_skills_right}>
      <div className="cont_title">
          <p>SKILLS</p>
        </div>
        <div className={styles.container_divs_skills}>
          <div className={styles.cont_each_skill}>
            <div className={styles.cont_icon_skill}>
              img icon
            </div>
            <div className={styles.cont_title_skill}>
              photoshop
            </div>
          </div>
          <div className={styles.cont_each_skill}>
            <div className={styles.cont_icon_skill}>
              img icon
            </div>
            <div className={styles.cont_title_skill}>
              photoshop
            </div>
          </div>
          <div className={styles.cont_each_skill}>
            <div className={styles.cont_icon_skill}>
              img icon
            </div>
            <div className={styles.cont_title_skill}>
              photoshop
            </div>
          </div>
          <div className={styles.cont_each_skill}>
            <div className={styles.cont_icon_skill}>
              img icon
            </div>
            <div className={styles.cont_title_skill}>
              photoshop
            </div>
          </div>
          <div className={styles.cont_each_skill}>
            <div className={styles.cont_icon_skill}>
              img icon
            </div>
            <div className={styles.cont_title_skill}>
              photoshop
            </div>
          </div>
          <div className={styles.cont_each_skill}>
            <div className={styles.cont_icon_skill}>
              img icon
            </div>
            <div className={styles.cont_title_skill}>
              photoshop
            </div>
          </div>
          <div className={styles.cont_each_skill}>
            <div className={styles.cont_icon_skill}>
              img icon
            </div>
            <div className={styles.cont_title_skill}>
              photoshop
            </div>
          </div>
          <div className={styles.cont_each_skill}>
            <div className={styles.cont_icon_skill}>
              img icon
            </div>
            <div className={styles.cont_title_skill}>
              photoshop
            </div>
          </div>
          

        </div>
      </div>
    </div>
  )
}

export default Skills