import styled from "styled-components";

import SkillsContainer from "../components/home/SkillsContainer";
import Presentation from "../components/home/Presentation";

import CoverImg from "../assets/cover.webp";
import CoverImgSmall from "../assets/cover-mobile.webp";

function Home() {
  return (
    <PageContainer className="home">
      <Cover />
      <SkillsContainer />
      <Presentation />
    </PageContainer>
  );
}

export default Home;

//STYLE
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Cover = styled.div`
  height: 85vh;
  background-image: url(${CoverImg});
  background-position: center;
  background-size: cover;
  margin-top: 1rem;
  border-radius: 20px;
  margin-left: 1rem;
  margin-right: 1rem;
  width: auto;
  @media screen and (max-width: 1000px) {
    background-image: url(${CoverImgSmall});
  }
  @media screen and (max-width: 650px) {
    height: 70vh;
  }
`;
