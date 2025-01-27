import styled from "styled-components";

export const HighlightWrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: none;
  border: none;
  cursor: pointer;
`;

export const HighlightImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #fff;
`;

export const HighlightTitle = styled.p`
  margin-top: 8px;
  font-size: 12px;
  color: #fff;
`;
