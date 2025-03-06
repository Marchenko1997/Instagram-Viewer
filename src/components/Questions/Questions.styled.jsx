import styled from "styled-components";

export const FAQSection = styled.section`
  margin-top: 80px;
  position: relative;
/* 
  &::before {
    content: "";
    position: absolute;
    top: 90%;
    left: 50%;
    width: 120px;
    height: 120px;
    rotate: 10deg;
    background-image: url("/images/FAQImg/camera-clipart-pdv.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    transform: translate(-50%, -50%);
    z-index: 0;
  } */

  @media screen and (min-width: 600px) {
    margin-top: 100px;

    /* &::before {
      width: 150px;
      height: 150px;
      left: 60%;
    } */
  }

  @media screen and (min-width: 768px) {
    margin-top: 120px;

    /* &::before {
      width: 180px;
      height: 180px;
      left: 87%;
    } */
  }

  @media screen and (min-width: 1280px) {
    margin-top: 140px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      width: 200px;
      height: 200px;
      rotate: 10deg;
      background-image: url("/images/FAQImg/camera-clipart-pdv.svg");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      transform: translate(-50%, -50%);
      z-index: 0;
      left: 88%;
      bottom: -16%;
    }
  }
`;
