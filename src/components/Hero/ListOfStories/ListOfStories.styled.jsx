import styled from "styled-components";

export const StoriesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 60px; 
  }
`;
