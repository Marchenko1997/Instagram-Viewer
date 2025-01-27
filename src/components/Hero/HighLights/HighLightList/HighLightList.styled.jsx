import styled from "styled-components";

export const HighlightsContainer = styled.ul`
  display: flex;
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 20px 0;
`;
export const SliderContainer = styled.div`
  width: 100%;
  margin: 20px 0;

  .slick-slide {
    display: flex;
    justify-content: center;
  }

  .slick-prev,
  .slick-next {
    z-index: 2;
    color: var(--primary-color);
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 20px;
    color: var(--primary-color);
  }
`;
