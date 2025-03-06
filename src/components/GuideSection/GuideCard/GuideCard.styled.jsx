import styled from "styled-components";
import { motion } from "framer-motion";

export const CardWrapper = styled(motion.div)`
  display: grid;
  grid-template-areas:
    "image"
    "text";
  grid-template-columns: 1fr;
  padding: 20px;
  font-family: Roboto, sans-serif;
  align-items: center;
  min-height: 250px;

  @media screen and (min-width: 600px) {
    grid-template-areas: ${({ reverse }) =>
      reverse ? `"image text"` : `"text image"`};
    grid-template-columns: 1fr 1fr;
    padding: 30px;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 41.66% 58.33%;
    border-bottom: 2px dashed #ffa8cf;
    padding: 40px;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: ${({ reverse }) =>
      reverse ? "33.33% 66.66%" : "66.66% 33.33%"};
  }

  @media screen and (min-width: 1400px) {
    padding: 40px 300px;
  }
`;

export const TextContainer = styled.div`
  grid-area: text;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  justify-content: center;
  max-width: 320px;
  text-align: center;

  @media screen and (min-width: 600px) {
    align-items: flex-start;
    text-align: left;
  }
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  text-align: center;
  line-height: 1.1;
  min-height: 30px;

  @media screen and (min-width: 600px) {
    font-size: 24px;
    text-align: left;
  }

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 32px;
  }
`;

export const CardImage = styled.img`
  grid-area: image;
  width: 180px;
  height: 180px;
  object-fit: contain;

  @media screen and (min-width: 600px) {
    width: 200px;
    height: 200px;
  }

  @media screen and (min-width: 768px) {
    width: 228px;
    height: 232px;
  }
`;

export const CardText = styled.p`
  font-size: 14px;
  font-weight: 300;
  margin: 0;
  text-align: center;
  color: var(--secondary-text);
  line-height: 1.4;

  @media screen and (min-width: 600px) {
    font-size: 16px;
    text-align: left;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
