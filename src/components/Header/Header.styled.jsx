import styled from "styled-components";

export const HeaderMain = styled.header`
  background: linear-gradient(
    266.47deg,
    #2713a1 -15.35%,
    #a11392 24.88%,
    #efac59 101.06%
  );
  border-radius: 0 0 40px 40px;
  width: 100%;
  height: 280px; /* Меньше высота для мобильных */
  position: relative;
  padding: 16px;

  .ellipse1 {
    background: linear-gradient(
      140.63deg,
      rgba(244, 228, 215, 0.4) 13.32%,
      rgba(244, 228, 215, 0.7) 69.77%
    );
    border-radius: 50%;
    height: 200px;
    width: 200px;
    position: absolute;
    left: -50px;
    top: 120px;
    z-index: 1;
  }

  .ellipse2 {
    background: linear-gradient(
      140.63deg,
      rgba(244, 228, 215, 0.4) 13.32%,
      rgba(244, 228, 215, 0.7) 69.77%
    );
    border-radius: 50%;
    height: 240px;
    width: 240px;
    position: absolute;
    right: -100px;
    top: -80px;
  }

  @media screen and (min-width: 768px) {
    height: 350px;

    .ellipse1 {
      height: 250px;
      width: 250px;
      left: -80px;
      top: 150px;
    }

    .ellipse2 {
      height: 280px;
      width: 280px;
      right: -120px;
      top: -100px;
    }
  }

  @media screen and (min-width: 1280px) {
    height: 400px;
    padding: 20px;

    .ellipse1 {
      height: 285px;
      width: 285px;
      left: -102px;
      top: 184px;
    }

    .ellipse2 {
      height: 332px;
      width: 332px;
      right: -172px;
      top: -125px;
    }
  }
`;

export const BurgerWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
`;
