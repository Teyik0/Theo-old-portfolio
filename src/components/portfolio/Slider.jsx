import styled from "styled-components";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper";

import { ProjectList } from "../../data/ProjectList";
import ProjectItem from "./ProjectItem";

function Slider({ option, title }) {
  return (
    <Container>
      <Title>
        {option === "project" ? "Autres Projets" : "Images du projet"}
      </Title>
      {
        <Swiper
          loop={true}
          slidesPerView={2}
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {ProjectList.map(({ name, category, slug, cover, img }) => {
            /* AFFICHAGE DU SLIDER DE PROJET */
            if (option === "project") {
              if (name !== title) {
                return (
                  <SwiperSlide key={slug + name}>
                    <ProjectItem
                      name={name}
                      category={category}
                      cover={cover}
                      slug={slug}
                    />
                  </SwiperSlide>
                );
              }
            }
            /* AFFICHAGE DU SLIDER D'IMAGE DU PROJET */
            if (option === "images") {
              if (name === title) {
                return img.map((img, index) => {
                  return (
                    <SwiperSlide key={slug + index}>
                      <img
                        className="slider-image"
                        src={img}
                        alt="projectimg"
                      />
                    </SwiperSlide>
                  );
                });
              } else return null;
            } else return null;
          })}
        </Swiper>
      }
    </Container>
  );
}

export default Slider;

const Title = styled.div`
  font-family: "Saira";
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 2px;
  text-align: center;
  padding-top: 0.75rem;
`;

const Container = styled.div`
  margin-bottom: 3rem;
  width: 420px;
  height: 440px;
  border-radius: 20px;
  background-color: #313334;
  @media screen and (max-width: 1150px) {
    margin: 0rem 0.5rem;
  }
  @media screen and (max-width: 900px) {
    margin-top: 3rem;
  }
  @media screen and (max-width: 450px) {
    width: 340px;
    height: 360px;
  }

  .swiper {
    border-radius: 20px;
    width: 100%;
    height: 100%;
    background-color: #313334;
  }

  .swiper-slide {
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide .slider-image {
    display: block;
    width: 90%;
    height: 90%;
    object-fit: cover;
    border-radius: 20px;
    transition: 0.4s;

    &:hover {
      transform: scale(1.05);
      transition: 0.4s;
    }
  }
`;
