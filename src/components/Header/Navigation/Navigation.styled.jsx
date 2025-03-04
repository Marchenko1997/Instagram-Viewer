import styled from "styled-components";

export const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  a {
    transition: transform var(--transition-duration),
      color var(--transition-duration);
    &:hover,
    &:focus {
      color: var(--bg-secondary);
      transform: scale(1.1);
    }
  }

  @media screen and (min-width: 768px) {
    gap: 20px;
    align-items: center;
    row-gap: 8px;
    justify-content: center;
    flex-direction: row;
    padding: 0;
  }

  @media screen and (min-width: 1280px) {
    column-gap: 82px;
    padding: 20px;
  }

  a {
    color: var(--bg-main);
    font-size: 20px;
    font-weight: 400;
    letter-spacing: -0.04em;
    display: flex;
    align-items: center;
    column-gap: 8px;
    transition: transform var(--transition-duration),
      color var(--transition-duration);

    &:hover {
      color: var(--bg-secondary);
      transform: scale(1.1);
    }
  }

  @media screen and (min-width: 768px) {
    a {
      font-size: 24px;
    }
  }

  @media screen and (min-width: 1280px) {
    a {
      font-size: 36px;
    }
  }
`;
