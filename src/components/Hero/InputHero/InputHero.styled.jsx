import styled from "styled-components";
import { SearchButton } from "../InputButton/InputButton.styled";

export const StyledField = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  border: 1px solid var(--color-accent);
  border-radius: 30px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: -0.03em;
  color: var(--color-shadow);

  &::placeholder {
    font-weight: 500;
    font-size: 12px;
    line-height: 1.3;
    letter-spacing: -0.03em;
    color: var(--placeholder-color);
  }

  &:focus {
    outline: none;
    border-color: var(--color-secondary-dark);
  }

  @media screen and (min-width: 375px) {
    height: 42px;
    padding: 12px;
    font-size: 14px;

    &::placeholder {
      font-size: 14px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 480px;
    height: 48px;
    padding: 14px;
    font-size: 16px;

    &::placeholder {
      font-size: 16px;
    }
  }

  @media screen and (min-width: 1280px) {
    width: 500px;
    height: 52px;
    padding: 16px;
    font-size: 18px;

    &::placeholder {
      font-size: 18px;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 16px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 80px;
    gap: 20px;
  }

  &:hover ${StyledField}, &:focus-within ${StyledField} {
    border-color: var(--color-secondary-dark);
  }

  &:hover ${SearchButton}, &:focus-within ${SearchButton} {
    background-color: var(--color-secondary-dark);
  }
`;
