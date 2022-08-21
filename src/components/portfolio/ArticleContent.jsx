import { Fragment } from "react";
import styled from "styled-components";

function ArticleContent({ title, date, category, content, cover }) {
  return (
    <Fragment>
      <Cover src={cover} alt="Cover" />
      <Info>
        <span>{title}</span>
        <span>{date}</span>
      </Info>
      <Tags>
        {category &&
          category.map((cat, index) => {
            return <span key={title + index}>{cat}</span>;
          })}
      </Tags>
      <Content>{content}</Content>
    </Fragment>
  );
}

export default ArticleContent;

const Content = styled.div`
  text-align: justify;
  p {
    margin: 1rem 0rem;
  }
`;

const Cover = styled.img`
  border-radius: 20px;
  height: 350px;
  object-fit: cover;
`;

const Tags = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  font-size: 10px;
  span {
    border-radius: 10px;
    background-color: #4c436e;
    padding: 2px 10px;
    margin: 2px 2px;

    font-family: "Saira";
    text-transform: uppercase;
    font-size: 10px;
    letter-spacing: 2px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  font-family: "Saira";
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 2px;
  margin: 0.25rem 0rem;

  span {
    margin: 0.5rem 0rem;
  }
`;
