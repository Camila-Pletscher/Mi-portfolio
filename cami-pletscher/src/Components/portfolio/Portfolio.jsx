import React, { useEffect, useState } from "react";
import ProjectList from "./ProjectList";
import styles from "./portfolio.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Portfolio() {
  useEffect(() => {
    AOS.init();
  }, []);


  const [project, setProject] = useState([]);
  const [filterValue, setFilterValue] = useState("todo");

  useEffect(() => {
    fetch("../data/projects.json")
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data);
      });
  }, []);

  let projectsFilter = project.filter((p) => {
    if (filterValue === "Diseño") {
      return p.category === "Diseño" || p.category === "Desarrollo, Diseño";
    } else if (filterValue === "Desarrollo") {
      return p.category === "Desarrollo" || p.category === "Desarrollo, Diseño";
    } else {
      return p;
    }
  });

  function onFilterValueSelected(e) {
    console.log(e.target.value);
    setFilterValue(e.target.value);
  }

  return (
    <div className={styles.container_portfolio}>
      <div data-aos="zoom-out" className="cont_title">
        <img
          src="https://i.postimg.cc/x1kmMQt4/Mesa-de-trabajo-15.png"
          alt=""
        ></img>
      </div>
      <div data-aos="zoom-out" className={styles.select}>
        <label>Filtrar por:</label>
        <select onChange={(e) => onFilterValueSelected(e)} >
          <option value="Todo" selected>Todo</option>
          <option value="Diseño">Diseño</option>
          <option value="Desarrollo">Desarrollo</option>
        </select>
        <div className={styles.select_arrow}></div>
      </div>

      <div id="cont_projects" className={styles.cont_project_list}>
        <ProjectList projectsFilter={projectsFilter} />
      </div>
    </div>
  );
}

export default Portfolio;
