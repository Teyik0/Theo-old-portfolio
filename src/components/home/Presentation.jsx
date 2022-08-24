import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

import photo from "../../assets/photo cv.jpg";

function Presentation() {
  return (
    <Container>
      <Fade left>
        <Photo src={photo} alt="photo" />
      </Fade>
      <Desc>
        <Fade right>
          <p>
            Passionné d’électronique et d’informatique, je suis un « touche à
            tout » qui aime apprendre en autodidacte.
          </p>
          <br />
          <p>
            Ainsi, j’ai pu développer de nombreuses compétences dans ces deux
            domaines, ce qui me permet aujourd’hui d’analyser, de diagnostiquer
            et de corriger un certain nombre de problèmes pour tout type
            d’appareil électronique et informatique.
          </p>
          <br />
          <p>
            Admis à l’
            <a
              target="_blank"
              className="esgi"
              href="https://www.esgi.fr/"
              rel="noreferrer"
            >
              ESGI
            </a>{" "}
            pour mes études, je m’intéresse notamment au développement web et à
            la blockchain. Je suis donc actuellement en train d’apprendre
            différents langages tels que Solidity pour la création de Smart
            Contract et les langages web tel que HTML, CSS et JavaScript.
          </p>
          <br />
          <p>
            Pour en savoir plus, sur mon parcours, consultez la section « 
            <Link to="/qui-suis-je">Qui suis-je</Link> ».
          </p>
        </Fade>
      </Desc>
    </Container>
  );
}

export default Presentation;

//STYLE
const Container = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 650px) {
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
`;

const Photo = styled.img`
  border-radius: 20px;
  opacity: 0.5;
  height: 320px;
  margin: 0rem 1rem;
  margin-bottom: 1rem;
`;

const Desc = styled.div`
  text-align: justify;
  margin-right: 1rem;
  margin-bottom: 1rem;
  padding: 3rem;
  background-color: rgb(17, 17, 17);
  border-radius: 20px;

  a {
    text-decoration: underline;
    text-underline-offset: 1px;
  }

  @media screen and (max-width: 1200px) {
    padding: 2rem;
  }
  @media screen and (max-width: 650px) {
    margin: 0rem 1rem;
    margin-bottom: 1rem;
  }
`;
