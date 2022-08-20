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
  images,
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
            <VideoTitle>Vidéo de présentation</VideoTitle>
            <Video>
              <ReactPlayer url={videolink} width="100%" controls={true} />
            </Video>
          </Fragment>
        ) : null}
      </ArticleContainer>
      <SidePannel>
        <Slider option="project" />
        <Slider title={title} option="images" />
      </SidePannel>
    </Container>
  );
}

export default PageArticle;

//STYLE
// const ImageSlider = styled.div`
//   width: 420px;
//   border-radius: 20px;
//   background-color: #313334;
//   margin: 3rem 0rem;
// `;

const SidePannel = styled.div`
  margin-left: 1rem;
`;

const VideoTitle = styled.span`
  font-family: "Saira";
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 2px;
  margin: 1rem 0rem;
`;

const Video = styled.div`
  width: 100%;
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
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1rem 1rem;
  border-radius: 20px;
`;
