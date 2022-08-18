import React, { Fragment, useState } from "react";
import styled from "styled-components";

function ProjectItem({ name, type, langage, category, id }) {
  const [info, setInfo] = useState(false);

  return (
    <Fragment>
      <div
        className="project-item"
        onMouseOverCapture={() => setInfo(true)}
        onMouseOutCapture={() => setInfo(false)}
      >
        <div className={name}>
          <span className="project-name">{name}</span>
        </div>
      </div>

      {/* <Container
        onMouseOverCapture={() => setInfo(true)}
        onMouseOutCapture={() => setInfo(false)}
      >
        <div className={name}>
          <span className="project-name">{name}</span>
        </div>
      </Container> */}

      {/* {info ? (
        <div className="project-content">
          <span className="category">{category}</span>
          <span className="type">{type}</span>
          <span className="langage">{langage}</span>
          <span className="desc">{""}</span>
        </div>
      ) : null} */}
    </Fragment>
  );
}

export default ProjectItem;

//STYLE

const Container = styled.div`
  $width: 360px;
  $height: 200px;

  margin: 1rem 0.25rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: $width;
  height: $height;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 0.4s ease-in-out;
  z-index: 0;

  &:hover {
    transition: all 0.4s ease-in-out;
    transform: scale(1.1);
  }

  &:before {
    z-index: 1;
    opacity: 0.7;
    content: "";
    position: absolute;
    background-color: rgb(117, 161, 161);
    width: $width;
    height: $height;
    left: 0px;
    top: 0px;
    transform: translate(100%, 0%);
    border-top-left-radius: 80%;
    border-top-right-radius: 80%;
    transition: all 0.6s ease-in-out;
  }
  &:before {
    transform: translate(0%, 0%);
    border-radius: 0px;
  }

  &:after {
    color: black;
    z-index: -1;
    content: "En savoir plus";
    font-size: large;
    text-transform: uppercase;
    font-weight: 1000;
    text-align: left;
    background: url("../../assets/ajouter.png");
    background-size: 20%;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    width: $width;
    height: $height;
    left: 0px;
    top: 0px;
    transform: translate(0%, -100%);
    transition: all 0.6s ease-in-out;
    opacity: 0.7;
  }

  &:after {
    z-index: 1;
    transform: translate(0%, 0%);
  }
`;
