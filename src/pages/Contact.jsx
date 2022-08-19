import { useState } from "react";
import styled from "styled-components";

import Icon from "../components/contact/Icon";

import emailIcon from "../assets/othersicons/email.png";
import linkedinIcon from "../assets/othersicons/linkedin2.png";
import telephoneIcon from "../assets/othersicons/telephone.png";

function Contact() {
  // eslint-disable-next-line no-unused-vars
  const [mailPop, setMailPop] = useState(false);

  return (
    <Container>
      <IconButton onClick={() => setMailPop(true)}>
        <a
          target="_top"
          href="mailto:theosamarasinghe@gmail.com"
          rel="noreferrer"
        >
          <Icon icon={emailIcon} text="theosamarasinghe@gmail.com" link="" />
        </a>
      </IconButton>
      <IconButton>
        <a
          href="https://www.linkedin.com/in/th%C3%A9o-samarasinghe/?originalSubdomain=fr"
          target="_blank"
          rel="noreferrer"
        >
          <Icon icon={linkedinIcon} text="LinkedIn" />
        </a>
      </IconButton>
      <Icon icon={telephoneIcon} text="06 98 75 54 79" link="" />

      {/* {mailPop ? <MailPop></MailPop> : null} */}
    </Container>
  );
}

export default Contact;

//STYLE

const Container = styled.div`
  position: relative;
  margin: 1rem 1rem;
  background-color: #20204237;
  box-shadow: 0px 0px 20px 1px black;
  border-radius: 20px;
  height: 75vh;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media screen and (max-width: 640px) {
    height: auto;
  }
`;

const IconButton = styled.button`
  background: transparent;
  border: none;
  color: #d8e0e7;
  font-family: "Saira";
  font-size: 16px;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    color: rgb(117, 71, 13);
    transition: 0.4s;
  }
`;
