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
  margin-top: 140px;

  .ellipse1 {
    background: linear-gradient(
      229.54deg,
      rgba(244, 228, 215, 0.4) 15.93%,
      #f4e4d7 rgba(244, 228, 215, 0.6) 71.29%
    );
    border-radius: 50%;
    height: 285px;
    width: 285px;
    position: absolute;
    right: -102px; /* Инвертируем расположение */
    bottom: 184px;
  }

  .ellipse2 {
    background: linear-gradient(
      140.63deg,
      rgba(244, 228, 215, 0.4) 13.32%,
      rgba(244, 228, 215, 0.7) 69.77%
    );
    border-radius: 50%;
    height: 332px;
    width: 332px;
    position: absolute;
    left: -172px; /* Инвертируем расположение */
    bottom: -125px;
  }
`;
