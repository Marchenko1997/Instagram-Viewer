import styled from "styled-components";

export const SearchButton = styled.button`
  width: 100px;
  height: 38px;
  border-radius: 30px;
  outline: none;
  border: none;
  background-color: var(--color-accent);
  color: var(--bg-main);
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: -0.03em;
  transition: var(--transition-duration);

  @media screen and (min-width: 375px) {
    width: 110px;
    height: 40px;
    font-size: 12px;
  }

  @media screen and (min-width: 768px) {
    width: 120px;
    height: 45px;
    font-size: 14px;
  }

  @media screen and (min-width: 1280px) {
    width: 136px;
    height: 50px;
    font-size: 16px;
    line-height: 1.25;
  }
`;
