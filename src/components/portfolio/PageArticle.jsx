import styled from "styled-components";
import ReactPlayer from "react-player/youtube";

import ArticleContent from "./ArticleContent";
import Slider from "./Slider";
import { Fragment } from "react";

function PageArticle({
  title,
  date,
  category,
  cover,
  videolink,
  url,
  content,
}) {
  return (
    <Container>
      <ArticleContainer>
        <ArticleContent
          title={title}
          date={date}
          category={category}
          cover={cover}
          content={content}
        />
        {videolink ? (
          <Fragment>
            <Title className="videotitle">Vidéo de présentation</Title>
            <Video>
              <ReactPlayer url={videolink} width="100%" controls={true} />
            </Video>
          </Fragment>
        ) : null}

        {url && (
          <Title className="link">{url.length > 1 ? "liens" : "lien"}</Title>
        )}
        {url
          ? url.map((el) => {
              return (
                <li key={el}>
                  <a href={el} target="_blank" rel="noreferrer">
                    <span className="url">{el}</span>
                  </a>
                </li>
              );
            })
          : null}
      </ArticleContainer>
      <SidePannel>
        <Slider title={title} option="project" />
        <Slider title={title} option="images" />
      </SidePannel>
    </Container>
  );
}

export default PageArticle;

const SidePannel = styled.div`
  margin-left: 1rem;
  @media screen and (max-width: 1150px) {
    display: flex;
    flex-direction: row;
    margin-left: 0rem;
  }
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const Title = styled.span`
  font-family: "Saira";
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 2px;
  margin: 1rem 0rem;
`;

const Video = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  iframe {
    border-radius: 20px;
  }
`;

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #313334;
  border-radius: 20px;
  width: 60%;
  padding: 1rem 1rem;
  margin-bottom: 1rem;
  .url {
    font-size: 14px;
  }
  .link {
    margin: 0rem 0rem;
  }
  li {
    margin-left: 1rem;
  }
  .videotitle {
    margin-top: 0rem;
  }
  @media screen and (max-width: 1150px) {
    width: 100%;
  }
  @media screen and (max-width: 900px) {
    margin-bottom: -2rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1rem 1rem;
  border-radius: 20px;
`;
