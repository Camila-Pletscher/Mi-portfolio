import React, { useEffect, useState } from "react";
import ProjectList from "./ProjectList";
import styles from "./portfolio.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function PortfolioEn() {
  useEffect(() => {
    AOS.init();
  }, []);


  const [project, setProject] = useState([]);
  const [filterValue, setFilterValue] = useState("todo");

  useEffect(() => {
    fetch("../data/projectsEn.json")
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data);
      });
  }, []);

  let projectsFilter = project.filter((p) => {
    if (filterValue === "Design") {
      return p.category === "Design" || p.category === "Development, Design";
    } else if (filterValue === "Development") {
      return p.category === "Development" || p.category === "Development, Design";
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
          src="https://i.postimg.cc/Y0RYYLhg/Mesa-de-trabajo-15-copia.png"
          alt=""
        ></img>
      </div>
      <div data-aos="zoom-out" className={styles.select}>
        <label>Filter by:</label>
        <select onChange={(e) => onFilterValueSelected(e)} >
          <option value="All" selected>All</option>
          <option value="Design">Design</option>
          <option value="Development">Development</option>
        </select>
        <div className={styles.select_arrow}></div>
      </div>

      <div id="cont_projects" className={styles.cont_project_list}>
        <ProjectList projectsFilter={projectsFilter} />
      </div>
    </div>
  );
}

export default PortfolioEn;
