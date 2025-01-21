import styled from "styled-components";

export const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 8px;

  a {
    color: var(--bg-main);
    font-size: 24px;
    font-weight: 400;
    letter-spacing: -0.04em;
    display: flex;
    align-items: center;
    column-gap: 8px;

    &:hover {
      color: var(--bg-secondary);
      transform: scale(1.1);
      transition-duration: var(--transition-duration);
    }
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    column-gap: 82px;
    padding: 20px;

    a {
      font-size: 36px;
    }
  }
`;