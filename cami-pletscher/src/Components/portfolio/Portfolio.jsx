import React, { useEffect, useState } from 'react'
import ProjectList from './ProjectList';
import styles from './portfolio.module.css';

function Portfolio() {
    const [project, setProject] = useState([]);

    useEffect(() => {
      fetch("../data/projects.json")
        .then((resp) => resp.json())
        .then((data) => {
          setProject(data);
        });
    }, []);

  return (
    <div className={styles.container_portfolio}>
        <div className='cont_title'>
            <img src='https://i.postimg.cc/x1kmMQt4/Mesa-de-trabajo-15.png' alt=''></img>
        </div>
        <div>
            <div>todo</div>
            <div>Desarrollo</div>
            <div>Diseño</div>
        </div>
        <div>
            <ProjectList projects={project}/>
        </div>

        
    </div>
  )
}

export default Portfolio