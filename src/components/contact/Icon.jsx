import styled from "styled-components";

function Icon({ icon, text }) {
  return (
    <Block>
      <Img src={icon} alt="icon" width="80px" />
      <Span>{text}</Span>
    </Block>
  );
}

export default Icon;

//STYLE

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0rem 3rem;
  width: 300px;
  height: 200px;
`;

const Img = styled.img`
  margin: 1rem 0rem;
`;

const Span = styled.span`
  font-family: "Saira";
  font-size: 16px;
`;
