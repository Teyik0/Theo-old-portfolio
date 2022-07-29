import React, { useState } from "react";

function ProjectItem({ name, type, langage, category, id }) {
  const [typeItem, setType] = useState("");
  const [categoryItem, setCat] = useState("");
  const [contentItem, setContent] = useState("");
  const [langageItem, setLangage] = useState("");

  const setHover = function () {
    setCat("catégorie : " + category);
    setType("type : " + type);
    setLangage("langage : " + langage);
  };
  const resetHover = function () {
    setType("");
    setCat("");
    setContent("");
    setLangage("");
  };

  return (
    <li key={id} className="project-item-content">
      <div
        className="project-item"
        onMouseOverCapture={setHover}
        onMouseOutCapture={resetHover}
      >
        <div className={name}>
          <span className="project-name">{name}</span>
        </div>
      </div>
      <div className="project-content">
        <span className="category">{categoryItem}</span>
        <span className="type">{typeItem}</span>
        <span className="langage">{langageItem}</span>
        <span className="desc">{contentItem}</span>
      </div>
    </li>
  );
}

export default ProjectItem;
