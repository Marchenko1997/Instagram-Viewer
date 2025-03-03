import styled from "styled-components";

export const Button = styled.button`
  width: 40px;
  height: 40px;
  background-color: var(--accent-light);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -6px;
  right: -6px;
  z-index: 20;

  svg {
    stroke: var(--bg-main);
    width: 20px;
    height: 20px;
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
