import styled from "styled-components";

export const FeaturesWrapper = styled.div`
  text-align: center;
  color: var(--main-text);
  margin-top: 100px; /* Меньше отступ для мобильных */
  overflow: hidden;

  @media screen and (min-width: 768px) {
    margin-top: 120px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 140px;
  }
`;

export const FeaturesTitle = styled.h2`
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  margin-bottom: 30px;
  transform: translateX(100%);
  opacity: 0;
  transition: transform 1.8s cubic-bezier(0.25, 1, 0.3, 1),
    opacity 1.8s cubic-bezier(0.25, 1, 0.3, 1);
  transition-delay: 0.3s;

  &.visible {
    transform: translateX(0);
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 34px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 992px) {
    font-size: 38px;
    line-height: 42px;
    margin-bottom: 60px;
  }
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr; 
  grid-auto-rows: auto;
  row-gap: 20px;
  transform: translateX(-100%);
  opacity: 0;
  transition: transform 1.8s cubic-bezier(0.25, 1, 0.3, 1) 0.4s,
    opacity 1.8s cubic-bezier(0.25, 1, 0.3, 1) 0.4s;

  &.visible {
    transform: translateX(0);
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); 
    column-gap: 16px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr); 
    column-gap: 24px;
  }
`;
