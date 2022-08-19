import { useState, useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

import Icon from "../components/contact/Icon";

import emailIcon from "../assets/othersicons/email.png";
import linkedinIcon from "../assets/othersicons/linkedin2.png";
import telephoneIcon from "../assets/othersicons/telephone.png";

function Contact() {
  const [mailPop, setMailPop] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "x5GAQjdNwQR9-1iJC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // const templateParams = {
  //   name: "James",
  //   notes: "Check this out!",
  // };

  // const handleClick = () => {
  //   emailjs
  //     .send(
  //       "YOUR_SERVICE_ID",
  //       "YOUR_TEMPLATE_ID",
  //       templateParams,
  //       "x5GAQjdNwQR9-1iJC"
  //     )
  //     .then(
  //       function (response) {
  //         console.log("SUCCESS!", response.status, response.text);
  //       },
  //       function (error) {
  //         console.log("FAILED...", error);
  //       }
  //     );
  // };

  return (
    <Container>
      <IconButton onClick={() => setMailPop(true)}>
        <a
          href="mailto:sat.theo.fr@gmail.com?subject=test&body=TEststets"
          rel="noreferrer"
        >
          <Icon icon={emailIcon} text="sat.theo.fr@icloud.com" link="" />
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

      {mailPop ? (
        <MailPop>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>

          <button onClick={() => setMailPop(false)}>annuler</button>
          {/* <button type="submit" onClick={handleClick}>
            confirmer
          </button> */}
        </MailPop>
      ) : null}
    </Container>
  );
}

export default Contact;

//STYLE
const MailPop = styled.div`
  position: absolute;
  height: 400px;
  width: 600px;
  background-color: #1d1b1bbe;
  box-shadow: 0px 0px 5px 2px black;
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
