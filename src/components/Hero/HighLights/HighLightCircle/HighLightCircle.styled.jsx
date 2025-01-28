import styled from "styled-components";



export const HighlightWrapper = styled.button`
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  display: block;
  font-size: inherit;
  line-height: inherit;
  padding: 0;
  text-align: center;
  text-decoration: none;
`;

export const HighlightImage = styled.img`
  background: var(--loading-gif-url) no-repeat center center;
  background-size: 25px;
  border-radius: 50%;
  box-shadow: 0 0 1px #000;
  height: 70px;
  margin-bottom: 5px;
  object-fit: cover;
  transform: scale(1);
  transition: transform 0.2s ease-in-out;
  width: 70px;

  &:hover {
    transform: scale(1.1); 
  }
`;
export const HighlightTitle = styled.p`
  margin-top: 8px;
  font-size: 12px;
  color: var(--secondary-text);
`;
