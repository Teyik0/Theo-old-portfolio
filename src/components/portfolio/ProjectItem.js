import React, { useState } from "react";

function ProjectItem({ name, type, langage, category, cover }) {
  return (
    <div>
      <li key={name} className="project-item">
        <div className={name}>
          <span className="test">{name}</span>
        </div>
      </li>
    </div>
  );
}

export default ProjectItem;
