import styled from "styled-components";

export const MainTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 1280px) {
    margin-top: 40px;
    margin-left: 240px;
    flex-direction: column;
    gap: 50px;
  }
`;

export const MainTitle = styled.h1`
  font-size: 36px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  color: var(--bg-main);
  margin-right: auto;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 54px;
  }
`;

export const HeaderText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  color: var(--bg-main);

  @media screen and (min-width: 1280px) {
    font-size: 28px;
    margin-left: 80px;
  }
`;