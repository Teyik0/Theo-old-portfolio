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
        <Cover src={cover} alt={`project : ${name}`} />
        <Title>{name}</Title>

        {info ? (
          <Tags>
            {category.map((el) => {
              return <Tag>{el}</Tag>;
            })}
          </Tags>
        ) : null}
      </Container>
    </Fragment>
  );
}

export default ProjectItem;

//STYLE
const size = `width: 380px;
height: 220px;`;
const size2 = `width: 320px;
height: 160px;`;

const Cover = styled.img`
  ${size}
  @media screen and (max-width: 650px) {
    ${size2};
  }
`;

const Tag = styled.span`
  border-radius: 10px;
  background-color: #4c436e;

  height: fit-content;
  padding: 2px 10px;
  margin: 0px 1px;
  color: white;
`;

const Tags = styled.div`
  position: absolute;
  z-index: 3;

  display: flex;
  flex-direction: row;

  width: auto;
  height: 56px;
  bottom: 0px;
  right: 2px;

  font-size: 12px;
`;

const Container = styled.div`
  margin: 1rem 1rem;
  border-radius: 10px;
  ${size};
  cursor: pointer;

  overflow: hidden;
  position: relative;
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
    ${size}
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
    ${size}
    left: 0px;
    top: 0px;
    transform: translate(100%, 0%);
    transition: all 0.4s ease-in-out;
    opacity: 0.7;
  }
  &:hover:after {
    transform: translate(0%, 0%);
  }

  @media screen and (max-width: 650px) {
    ${size2};
    &:before {
      ${size2};
    }
    &:after {
      ${size2};
    }
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
