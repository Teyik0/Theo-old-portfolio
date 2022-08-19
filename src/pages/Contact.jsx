import styled from "styled-components";

import { useState } from "react";

import Icon from "../components/contact/Icon";

import emailIcon from "../assets/othersicons/email.png";
import linkedinIcon from "../assets/othersicons/linkedin2.png";
import telephoneIcon from "../assets/othersicons/telephone.png";

function Contact() {
  const [mailPop, setMailPop] = useState(false);
  console.log(mailPop);
  return (
    <Container>
      <Button onClick={() => setMailPop(!mailPop)}>
        <Icon icon={emailIcon} text="sat.theo.fr@icloud.com" link="" />
      </Button>
      <Button>
        <a href="https://www.linkedin.com/in/th%C3%A9o-samarasinghe/?originalSubdomain=fr">
          <Icon
            icon={linkedinIcon}
            text="LinkedIn"
            link="https://www.linkedin.com/in/th%C3%A9o-samarasinghe/?originalSubdomain=fr"
          />
        </a>
      </Button>
      <Icon icon={telephoneIcon} text="06 98 75 54 79" link="" />
      {/* {mailPop ? <MailPop>TESTT</MailPop> : null} */}
    </Container>
  );
}

export default Contact;

//STYLE
const MailPop = styled.div`
  position: absolute;
  height: 300px;
  width: 500px;
  background-color: #1d1b1bbe;
  box-shadow: 0px 0px 20px 1px black;
  border-radius: 20px;
`;

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
  a {
    transition: 0.4s;
  }
`;

const Button = styled.button`
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
