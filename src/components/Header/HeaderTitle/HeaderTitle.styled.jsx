import styled from "styled-components";

export const MainTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 16px;
  margin-top: 40px;
  max-width: 600px;


  @media screen and (min-width: 768px) {
    margin-top: 40px;
    margin-left: 70px;
    gap: 30px;
    max-width: 800px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 40px;
    margin-left: 240px;
    flex-direction: column;
    gap: 50px;
    text-align: left;
    max-width: 100%;
  }
`;

export const MainTitle = styled.h1`
  font-size: 28px;
  font-weight: 400;
  line-height: 1.2;
  text-transform: uppercase;
  color: var(--bg-main);

  @media screen and (min-width: 768px) {
    font-size: 36px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 54px;
  }
`;

export const HeaderText = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.2;
  text-transform: uppercase;
  color: var(--bg-main);

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 28px;
  }
`;
