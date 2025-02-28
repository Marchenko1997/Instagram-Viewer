import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  width: 260px;
  height: 260px;
  z-index: 2;
  margin-left: 40px;

  img {
    width: 100%;
    height: 100%;
    transition: transform 0.8s ease-in-out;
  }

  &:hover img {
    transform: rotate(360deg);
  }
`;