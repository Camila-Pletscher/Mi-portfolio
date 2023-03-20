import React from "react";
import { Link } from "react-router-dom";

function ProjectItem({ image, id, title, video, code }) {
  return (
    <div>
      <div>
        <img src={image} alt=""></img>
        <p>{title}</p>
      </div>

      <div>
        <div>
          <Link to={video}>
            <img src="" alt=""></img>
          </Link>
        </div>
        <div>
          <Link to={code}>
            <img src="" alt=""></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
