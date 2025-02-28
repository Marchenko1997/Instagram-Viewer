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
  height: 250px;
  padding: 20px;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  margin-top: 140px;

  .ellipse11 {
    background: linear-gradient(
      229.54deg,
      rgba(244, 228, 215, 0.4) 15.93%,
      rgba(244, 228, 215, 0.6) 71.29%
    );
    border-radius: 50%;
    height: 285px;
    width: 285px;
    position: absolute;
    right: -90px;
    bottom: 60px;
  }

  .ellipse22 {
    background: linear-gradient(
      140.63deg,
      rgba(244, 228, 215, 0.4) 13.32%,
      rgba(244, 228, 215, 0.7) 69.77%
    );
    border-radius: 50%;
    height: 332px;
    width: 332px;
    position: absolute;
    left: -140px;
    bottom: -180px;
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
  font-size: 18px;
  text-align: center;
  margin: 0;
  margin-top: auto; 
`;
