import styled from "styled-components";

export const CardWrapper = styled.div`
  font-size: 18px;
  font-weight: 300;
  line-height: 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardImage = styled.img`
  height: auto;
  margin-bottom: 20px;
  max-width: 100%;
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  line-height: 23px;
  margin-bottom: 6px;
`;

export const CardDescription = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
`;
