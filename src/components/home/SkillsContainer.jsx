import styled from "styled-components";
import Fade from "react-reveal/Fade";

import SkillItem from "./SkillItem";
import { SkillsList } from "../../data/SkillsList";

function SkillsContainer() {
  return (
    <Container>
      <Fade top>
        <h3>Compétences</h3>
      </Fade>

      <SkillList>
        {SkillsList.map(
          ({ skillName, logo, category, niveau, link }, index) => {
            if (link) {
              return (
                <Fade bottom>
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    key={skillName}
                  >
                    <SkillItem
                      skillName={skillName}
                      logo={logo}
                      category={category}
                      niveau={niveau}
                    />
                  </a>
                </Fade>
              );
            } else
              return (
                <Fade bottom delay={index * 30}>
                  <SkillItem
                    key={skillName}
                    skillName={skillName}
                    logo={logo}
                    category={category}
                    niveau={niveau}
                  />
                </Fade>
              );
          }
        )}
      </SkillList>
    </Container>
  );
}

export default SkillsContainer;

//STYLE
const Container = styled.div`
  background-color: rgb(37, 38, 39);
  padding: 0.1rem;
  margin: 1rem 1rem;
  border-radius: 20px;
  h3 {
    text-align: center;
    margin: 1rem auto;
    letter-spacing: 1px;
    font-weight: 400;
    font-size: 20px;
  }
`;

const SkillList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 10rem;
  margin-right: 10rem;
  margin-bottom: 1rem;
  a {
    color: #bc0000c5;
  }
  @media screen and (max-width: 1500px) {
    .skill-list {
      margin-left: 7rem;
      margin-right: 7rem;
      width: auto;
    }
  }
  @media screen and (max-width: 1000px) {
    margin-left: 3rem;
    margin-right: 3rem;
    width: auto;
  }

  @media screen and (max-width: 650px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;
