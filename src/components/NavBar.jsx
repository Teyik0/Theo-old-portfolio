import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";

export default function NavBar() {
  return (
    <Fragment>
      <Container>
        <Link to="/">
          <Font>Accueil</Font>
        </Link>
        <Link to="qui-suis-je">
          <Font>Qui suis-je ?</Font>
        </Link>
        <Link to="portfolio">
          <Font>Portfolio</Font>
        </Link>
        <Link to="contact">
          <Font>Contact</Font>
        </Link>
      </Container>
      <Outlet />
    </Fragment>
  );
}

//STYLE
const Container = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1.5rem;
  background-color: rgb(16, 17, 17);
  margin: 0rem 1rem;
  margin-top: 1rem;
  border-radius: 20px;

  @media screen and (max-width: 650px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Font = styled.h2`
  font-family: "Saira";
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 0rem 1.2rem;
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: 0.4s;
  &:hover {
    color: rgb(117, 71, 13);
    text-underline-offset: 15px;
    transition: 0.4s;
  }
  @media screen and (max-width: 650px) {
    &:hover {
      color: rgb(117, 71, 13);
      text-underline-offset: 3px;
    }
  }
`;
