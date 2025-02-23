import styled from "styled-components";

export const FeaturesWrapper = styled.div`
  text-align: center;
  color: var(--main-text);
  margin-top: 160px;
`;

export const FeaturesTitle = styled.h2`
  font-size: 24px;
  font-weight: 400;
  line-height: 34px;
  margin: 40px 0;

  @media screen and (min-width: 992px) {
    font-size: 38px;
    line-height: 42px;
    margin: 55px 0 57px;
  }
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  column-gap: 24px;
`;
