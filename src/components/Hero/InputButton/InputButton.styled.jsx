import styled from "styled-components";

export const SearchButton = styled.button`
  width: 114px;
  height: 42px;
  border-radius: 30px;
  outline: none;
  border: none;
  background-color: var(--color-accent);
  color: var(--bg-main);
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  transition: var(--transition-duration);

  @media screen and (min-width: 1280px) {
    width: 136px;
    height: 50px;
    font-size: 16px;
    line-height: 1.25;
  }
`;