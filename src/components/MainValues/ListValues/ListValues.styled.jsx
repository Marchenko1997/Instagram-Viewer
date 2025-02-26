import styled from "styled-components";

export const FeaturesWrapper = styled.div`
  text-align: center;
  color: var(--main-text);
  margin-top: 140px;
  overflow: hidden;
`;

export const FeaturesTitle = styled.h2`
  font-size: 24px;
  font-weight: 400;
  line-height: 34px;
  margin-bottom: 40px;
  transform: translateX(100%);
  opacity: 0;
  transition: transform 1.8s cubic-bezier(0.25, 1, 0.3, 1),
    opacity 1.8s cubic-bezier(0.25, 1, 0.3, 1);
  transition-delay: 0.3s;

  &.visible {
    transform: translateX(0);
    opacity: 1;
  }

  @media screen and (min-width: 992px) {
    font-size: 38px;
    line-height: 42px;
    margin-bottom: 60px;
  }
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  column-gap: 24px;
  transform: translateX(-100%);
  opacity: 0;
  transition: transform 1.8s cubic-bezier(0.25, 1, 0.3, 1) 0.4s,
    opacity 1.8s cubic-bezier(0.25, 1, 0.3, 1) 0.4s;

  &.visible {
    transform: translateX(0);
    opacity: 1;
  }
`;
