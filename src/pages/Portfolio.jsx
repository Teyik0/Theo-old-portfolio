import ProjectItem from "../components/portfolio/ProjectItem";
import { ProjectList } from "../data/ProjectList";

import styled from "styled-components";

function Portfolio() {
  return (
    <Container>
      {ProjectList.map(({ name, category, slug, cover }) => {
        return (
          <ProjectItem
            key={slug}
            name={name}
            category={category}
            cover={cover}
            slug={slug}
          />
        );
      })}
    </Container>
  );
}

export default Portfolio;

//STYLE
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 1rem 1rem;
  padding: 1rem 0rem;
  background-color: #20204237;
  box-shadow: 0px 0px 20px 1px black;
  border-radius: 20px;
`;
