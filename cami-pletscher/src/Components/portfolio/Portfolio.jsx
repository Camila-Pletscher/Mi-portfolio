import React, { useEffect, useState } from "react";
import ProjectList from "./ProjectList";
import styles from "./portfolio.module.css";



function Portfolio() {
  const [project, setProject] = useState([]);
  const [filterValue, setFilterValue] = useState('todo');


  // const filterFx = document.querySelector('.filterFx');


  useEffect(() => {
    fetch("../data/projects.json")
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data);
      });
  }, []);

  let projectsFilter = project.filter((p) => {
    if(filterValue === 'Diseño') {
      return p.category === 'Diseño';
    } else if (filterValue === 'Desarrollo') {
      return p.category === 'Desarrollo';
    } else {
      return p;
    }
  })

  function onFilterValueSelected(e) {
    console.log(e.target.value);
    setFilterValue(e.target.value);
  }




  // function filter() {
  //     console.log(filterFx.value);

  //     if (filterFx.value == 1) {
  //       setProject(project);
  //       console.log(project);
  //     } else if(filterFx.value == 2) {
  //       setProject(project.filter ((p) => p.category === "diseño"));
  //       console.log(project);
  //     }else if (filterFx.value == 3 ) {
  //       setProject(project.filter ((p) => p.category === "desarrollo"));
  //       console.log(project);
  //     }
      

  //     renderProjectsFilter();
  // }

  // function renderProjectsFilter() {
  //   document.getElementById('cont_projects').innerHTML = `${<ProjectList projects={project} />}`
  // }

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
        <select onChange={(e) => onFilterValueSelected(e)} className="filterFx">
          <option value="" disabled selected></option>
          <option value="Todo">Todo</option>
          <option value="Diseño">Diseño</option>
          <option value="Desarrollo">Desarrollo</option>
        </select>
      </div>

      <div id="cont_projects" className={styles.cont_project_list}>
        <ProjectList projectsFilter={projectsFilter} />
      </div>
    </div>
  );
}

export default Portfolio;
