import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: linear-gradient(
    -266.47deg,
    #efac59 -15.35%,
    #a11392 24.88%,
    #2713a1 101.06%
  );
  border-radius: 40px 40px 0 0;
  width: 100%;
  height: 200px; 
  padding: 20px;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  margin-top: 100px;

  .ellipse11 {
    background: linear-gradient(
      229.54deg,
      rgba(244, 228, 215, 0.4) 15.93%,
      rgba(244, 228, 215, 0.6) 71.29%
    );
    border-radius: 50%;
    height: 140px;
    width: 140px;
    position: absolute;
    right: -50px;
    bottom: 90px;
    display: none;
  }

  .ellipse22 {
    background: linear-gradient(
      140.63deg,
      rgba(244, 228, 215, 0.4) 13.32%,
      rgba(244, 228, 215, 0.7) 69.77%
    );
    border-radius: 50%;
    height: 180px;
    width: 180px;
    position: absolute;
    left: -80px;
    bottom: -100px;
  }

  @media screen and (min-width: 768px) {
    height: 220px;
    margin-top: 120px;

    .ellipse11 {
      height: 250px;
      width: 250px;
      right: -70px;
      bottom: 50px;
      display: block;
    }

    .ellipse22 {
      height: 280px;
      width: 280px;
      left: -100px;
      bottom: -120px;
    }
  }

  @media screen and (min-width: 1280px) {
    height: 250px;
    margin-top: 140px;

    .ellipse11 {
      height: 285px;
      width: 285px;
      right: -90px;
      bottom: 60px;
      display: block;
    }

    .ellipse22 {
      height: 332px;
      width: 332px;
      left: -140px;
      bottom: -180px;
    }
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const ReservedText = styled.p`
  color: #fff;
  font-size: 12px;
  text-align: center;
  margin: 0;
  margin-top: auto;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
`;
