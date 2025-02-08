import styled from "styled-components";

export const HighlightCardContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-main-darker);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const HighlightImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const HighlightVideo = styled.video`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const LoadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
