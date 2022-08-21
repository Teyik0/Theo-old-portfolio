import styled from "styled-components";

import cv from "../assets/CV alternance.png";
import cvpdf from "../assets/CV alternance.pdf";

function Cv() {
  return (
    <a href={cvpdf} target="_blank" rel="noreferrer">
      <Container>
        <img src={cv} alt="CV" />
      </Container>
    </a>
  );
}

export default Cv;

const Container = styled.div`
  position: relative;
  margin: 1rem 1rem;
  background-color: #20204237;
  box-shadow: 0px 0px 20px 1px black;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  a {
    width: 60%;
  }
  img {
    width: 60%;
    border-radius: 20px;
    margin: 1rem 0rem;
    box-shadow: 0px 0px 20px 1px black;
  }
`;
