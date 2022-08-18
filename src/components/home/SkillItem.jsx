import React, { useState } from "react";
import styled from "styled-components";

function SkillItem({ skillName, logo, category, niveau }) {
  const [info, setInfo] = useState(false);

  return (
    <Container>
      <SkillBox
        onMouseOverCapture={() => setInfo(true)}
        onMouseOutCapture={() => setInfo(false)}
      >
        <img src={logo} alt={skillName} width="50px" height="50px" />
      </SkillBox>
      {info ? (
        <SkillInfo>
          <span className="skillName">{`nom : ${skillName}`}</span>
          <span className="category">{`catégories : ${category}`}</span>
          <span className="niveau">{`maîtrise : ${niveau}`}</span>
        </SkillInfo>
      ) : null}
    </Container>
  );
}

export default SkillItem;

//STYLE
const Container = styled.div``;

const SkillBox = styled.div`
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid rgb(204, 219, 219);
  border-radius: 10px;
  width: 70px;
  height: 70px;
  background-color: rgb(54, 54, 61);
  overflow: hidden;
  z-index: 0;
  position: relative;

  &::before {
    z-index: -1;
    content: "";
    position: absolute;
    background-color: rgb(117, 161, 161);
    width: 72px;
    height: 72px;
    left: -1px;
    top: 36px;
    transform: translate(-100%, -50%);
    transition: all 0.2s linear;
  }
  &:hover::before {
    transform: translate(0%, -50%);
  }
`;

const SkillInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 2;
  background-color: rgb(64, 66, 66);
  width: 220px;
  border-radius: 10px;
  margin-left: 3.9px;
  padding-left: 8px;

  @media screen and (max-width: 1500px) {
    width: 160px;
    padding-left: 5px;
  }

  @media screen and (max-width: 600px) {
    font-size: 12px;
    padding: 0px 5px;
    width: 105px;
  }
`;
