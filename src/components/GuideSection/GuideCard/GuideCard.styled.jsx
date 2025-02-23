import styled from "styled-components";

export const CardWrapper = styled.div`
  display: grid;
  grid-template-areas:
    "title"
    "text"
    "image";
  grid-template-columns: 1fr;
  padding: 40px 20px;
  font-family: Roboto, sans-serif;

  @media screen and (min-width: 600px) {
    grid-template-areas: ${({ reverse }) =>
      reverse
        ? `"title image"
           "text image"` // Теперь текст не будет смещаться вниз
        : `"image title"
           "image text"`};
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 768px) {
    grid-template-areas: ${({ reverse }) =>
      reverse
        ? `"image title"
           "image text"` // Оставляем изображение на месте
        : `"title image"
           "text image"`}; // Текст теперь идет сразу под заголовком
    grid-template-columns: 41.66% 58.33%;
    border-bottom: 2px dashed #ffa8cf;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: ${({ reverse }) =>
      reverse ? "33.33% 66.66%" : "66.66% 33.33%"};
  }

  @media screen and (min-width: 1400px) {
    padding: 40px 100px;
  }
`;
export const CardTitle = styled.h3`
  grid-area: title;
  font-size: 42px;
  font-weight: 700;
  margin-top: 40px;
  text-align: center;

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
  grid-area: text;
  font-size: 20px;
  font-weight: 300;
  margin: 0;
  text-align: center;
  color: var(--secondary-text);

  @media screen and (min-width: 600px) {
    text-align: left;
  }
`;

