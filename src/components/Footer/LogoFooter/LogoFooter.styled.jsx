import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  width: 180px;
  height: 180px;
  z-index: 2;
  margin: 0 auto;

  img {
    width: 80px;
    height: 80px;
    transition: transform 0.8s ease-in-out;
  }

  &:hover img {
    transform: rotate(360deg);
  }

  @media screen and (min-width: 600px) {
    width: 200px;
    height: 200px;

    img {
      width: 120px;
      height: 120px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 220px;
    height: 220px;
    margin-left: 20px;

    img{
    width: 140px;
    height: 140px;
    }
  }

  @media screen and (min-width: 1240px) {
   display: none;
  }
`;
