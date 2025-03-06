import styled from "styled-components";

export const FAQItem = styled.div`
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const FAQQuestion = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 6px;
  color: var(--main-text);

  @media screen and (min-width: 600px) {
    font-size: 20px;
  }

  @media screen and (min-width: 768px) {
    font-size: 22px;
  }

  @media screen and (min-width: 992px) {
    font-size: 24px;
  }
`;

export const FAQAnswer = styled.p`
  font-size: 14px;
  color: var(--secondary-text);
  line-height: 1.4;

  @media screen and (min-width: 600px) {
    font-size: 16px;
    line-height: 1.5;
  }

  @media screen and (min-width: 992px) {
    font-size: 18px;
    line-height: 1.6;
  }
`;
