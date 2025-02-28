import styled from "styled-components";

export const FAQSection = styled.section`
  margin-top: 140px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 80%; 
    left: 84%;
    width: 200px; 
    height: 200px;
    rotate: 10deg;
    background-image: url("/images/FAQImg/camera-clipart-pdv.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    transform: translateY(-50%); 
    z-index: 0;
  }
`;
