import styled from "styled-components";

export const FAQContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 16px;

  @media screen and (min-width: 600px) {
    padding: 20px;
  }

  @media screen and (min-width: 768px) {
    max-width: 600px;
    padding: 24px;
  }

  @media screen and (min-width: 992px) {
    max-width: 700px;
    padding: 28px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 800px;
    padding: 20px;
  }
`;
