import ProjectItem from "../components/portfolio/ProjectItem";
import { ProjectList } from "../data/ProjectList";
import { Link } from "react-router-dom";

import styled from "styled-components";

function Portfolio() {
  return (
    <Container>
      {ProjectList.map(
        ({ name, type, langage, category, videolink, id, cover, url }) => {
          if (url) {
            return (
              <a key={id} href={url} target="_blank" rel="noreferrer">
                <ProjectItem
                  name={name}
                  category={category}
                  videolink={videolink}
                  cover={cover}
                />
              </a>
            );
          } else {
            return (
              <Link key={id} to={"/portfolio/" + id}>
                <ProjectItem
                  name={name}
                  category={category}
                  videolink={videolink}
                  cover={cover}
                  key={id}
                />
              </Link>
            );
          }
        }
      )}
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
  margin-top: 1rem;
`;
