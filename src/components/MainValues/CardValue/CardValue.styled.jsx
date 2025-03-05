import styled from "styled-components";

export const CardWrapper = styled.div`
  font-size: 16px;
  font-weight: 300;
  line-height: 22px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
    padding: 20px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const CardImage = styled.img`
  height: auto;
  margin-bottom: 16px;
  max-width: 100%;

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 23px;
    margin-bottom: 6px;
  }
`;

export const CardDescription = styled.p`
  margin-top: 0;
  margin-bottom: 0.8rem;

  @media screen and (min-width: 768px) {
    margin-bottom: 1rem;
  }
`;
