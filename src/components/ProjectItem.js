import React from "react";
import ProjectList from "./ProjectList";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map((technology, index) => (
          <span key={index} className="technology">
            {technology}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
