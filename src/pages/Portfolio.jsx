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
  justify-content: center;
  align-items: center;
  margin: 0rem 0rem;
  margin-top: 1rem;
`;
