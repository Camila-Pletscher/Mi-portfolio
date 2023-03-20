import React, { useEffect, useState } from "react";
import ProjectList from "./ProjectList";
import styles from "./portfolio.module.css";

function Portfolio() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch("../data/projects.json")
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data);
      });
  }, []);

  const filterFx = document.querySelector('.filterFx');

  function filter() {
      console.log(filterFx.value);
      if(filterFx.value === 1) {
        let projectsFilter = project.filter ((p) => p.category === "diseño");
      console.log(projectsFilter);
      }

      renderProjectsFilter();
  }

  function renderProjectsFilter(projectsFilter) {
    projectsFilter = project;
  }

  return (
    <div className={styles.container_portfolio}>
      <div className="cont_title">
        <img
          src="https://i.postimg.cc/x1kmMQt4/Mesa-de-trabajo-15.png"
          alt=""
        ></img>
      </div>
      <div>
        <label>Filtrar por:</label>
        <select onChange={() => filter()} className="filterFx">
          <option value="" disabled selected></option>
          <option value="1">Todo</option>
          <option value="2">Diseño</option>
          <option value="3">Desarrollo</option>
        </select>
      </div>

      <div className={styles.cont_project_list}>
        <ProjectList projects={project} />
      </div>
    </div>
  );
}

export default Portfolio;
