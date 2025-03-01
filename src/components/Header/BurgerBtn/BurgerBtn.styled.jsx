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
  top: 16px;
  right: 16px;
  z-index: 10;

  @media screen and (min-width: 1280px) {
    display: none; /* Скрываем бургер на десктопе */
  }
`;
