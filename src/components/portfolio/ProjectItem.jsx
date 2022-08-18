import React, { Fragment, useState } from "react";
import styled from "styled-components";

import enSavoirPlusIcon from "../../assets/ajouter.png";

function ProjectItem({ name, type, langage, category, id, cover }) {
  const [info, setInfo] = useState(false);

  return (
    <Fragment>
      <Container
        onMouseOverCapture={() => setInfo(true)}
        onMouseOutCapture={() => setInfo(false)}
      >
        <img src={cover} alt="project-cover" height="200px" width="360px" />
        <Title>{name}</Title>
      </Container>

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
  margin: 2rem 1rem;
  border-radius: 10px;
  width: 360px;
  height: 200px;
  cursor: pointer;

  overflow: hidden;
  position: relative;
  z-index: 0;

  /* background-image: url();
  background-position: center;
  background-size: cover; */

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
    width: 360px;
    height: 200px;
    transform: translate(100%, 0%);
    border-top-left-radius: 80%;
    border-top-right-radius: 80%;
    transition: 0.3s ease-in;
  }
  &:hover:before {
    transform: translate(0%, 0%);
    border-radius: 0px;
  }

  &:after {
    z-index: 1;
    content: "En savoir plus";
    position: absolute;

    color: black;
    font-size: large;
    text-transform: uppercase;
    font-weight: 1000;
    text-align: left;

    background: url(${enSavoirPlusIcon});
    background-size: 20%;
    background-repeat: no-repeat;
    background-position: center;
    width: 360px;
    height: 200px;
    left: 0px;
    top: 0px;
    transform: translate(100%, 0%);
    transition: all 0.4s ease-in-out;
    opacity: 0.7;
  }
  &:hover:after {
    transform: translate(0%, 0%);
  }
`;

const Title = styled.span`
  z-index: 2;
  position: absolute;
  bottom: 0;
  right: 0;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 9px;
  border-bottom-left-radius: 20px;
  border-color: rgb(28, 28, 26);
  padding: 0.5rem;
  margin-top: 0.5rem;
  background-color: rgb(28, 28, 26);
  font-family: "Saira";
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 2px;
`;
