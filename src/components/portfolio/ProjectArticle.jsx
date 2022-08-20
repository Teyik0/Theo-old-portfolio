import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { ProjectList } from "../../data/ProjectList";
import PageArticle from "./PageArticle";

const empty = { name: "" };

function ProjectArticle() {
  const params = useParams();
  const [data, setData] = useState(empty);
  const [isData, setIsData] = useState(empty);

  useEffect(() => {
    ProjectList.map((project) => {
      if (project.slug === params.projectid) {
        setData(project);
        return null;
      } else return null;
    });
  }, [params.projectid]);

  useEffect(() => {
    if (data !== empty) setIsData(true);
    else setIsData(false);
  }, [data]);

  return (
    <Container>
      {isData ? (
        <PageArticle
          title={data.name}
          date={data.date}
          category={data.category}
          cover={data.cover}
          videolink={data.videolink}
          url={data.url}
          content={data.content}
          images={data.img}
        />
      ) : null}
    </Container>
  );
}

export default ProjectArticle;

const Container = styled.div``;
