import styled from "styled-components";

export const FAQTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
  color: var(--main-text);

  @media screen and (min-width: 600px) {
    font-size: 26px;
    margin-bottom: 26px;
  }

  @media screen and (min-width: 768px) {
    font-size: 28px;
    margin-bottom: 28px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 28px;
    margin-bottom: 30px;
  }
`;
