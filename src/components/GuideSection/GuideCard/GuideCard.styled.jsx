import styled from "styled-components";

export const CardWrapper = styled.div`
  display: grid;
  grid-template-areas:
    "image"
    "text";
  grid-template-columns: 1fr;
  padding: 40px 20px;
  font-family: Roboto, sans-serif;
  align-items: center;
  min-height: 280px;

  @media screen and (min-width: 600px) {
    grid-template-areas: ${({ reverse }) =>
      reverse ? `"image text"` : `"text image"`};
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 41.66% 58.33%;
    border-bottom: 2px dashed #ffa8cf;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: ${({ reverse }) =>
      reverse ? "33.33% 66.66%" : "66.66% 33.33%"};
  }

  @media screen and (min-width: 1400px) {
    padding: 40px 300px;
  }


  &:nth-child(2),
  &:nth-child(4),
  &:nth-child(5) {
    padding: 20px 300px;
  }

  &:nth-child(1),
  &:nth-child(3) {
    padding: 20px 300px;
  }
`;

export const TextContainer = styled.div`
  grid-area: text;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  justify-content: center;
  max-width: 400px;

  &:nth-child(2),
  &:nth-child(4) {
    margin-left: 40px;
  }


`;

export const CardTitle = styled.h3`
  font-size: 32px;
  font-weight: 700;
  margin: 0;
  text-align: center;
  line-height: 1.1;
  min-height: 30px;

  @media screen and (min-width: 600px) {
    text-align: left;
  }
`;

export const CardImage = styled.img`
  grid-area: image;
  width: 228px;
  height: 232px;
  object-fit: contain;
`;

export const CardText = styled.p`
  font-size: 18px;
  font-weight: 300;
  margin: 0;
  text-align: center;
  color: var(--secondary-text);
  line-height: 1.2;

  @media screen and (min-width: 600px) {
    text-align: left;
  }
`;
