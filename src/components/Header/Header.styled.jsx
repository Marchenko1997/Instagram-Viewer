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
  height: 400px;
  position: relative;
  padding: 20px;

  .ellipse1 {
    background: linear-gradient(
      140.63deg,
      rgba(244, 228, 215, 0.4) 13.32%,
      /* Светлый оттенок #f4e4d7 с прозрачностью */ rgba(244, 228, 215, 0.7)
        69.77% /* Еще более насыщенный оттенок */
    );
    border-radius: 50%;
    height: 285px;
    width: 285px;
    position: absolute;
    left: -102px;
    top: 184px;
    z-index: 1;
  }

  .ellipse2 {
    background: linear-gradient(
      140.63deg,
      rgba(244, 228, 215, 0.4) 13.32%,
      /* Светлый оттенок #f4e4d7 с прозрачностью */ rgba(244, 228, 215, 0.7)
        69.77% /* Еще более насыщенный оттенок */
    );
    border-radius: 50%;
    height: 332px;
    width: 332px;
    position: absolute;
    right: -172px;
    top: -125px;
  }
`;