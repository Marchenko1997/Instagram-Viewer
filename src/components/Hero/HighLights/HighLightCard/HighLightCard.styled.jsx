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
  position: relative;

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

export const TagsContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  display: inline-flex;
  align-items: center;
  background: hsla(0, 0%, 9%, 0.6);
  border-radius: 44px;
  padding: 4px 10px;
  gap: 8px;
  justify-content: center;
  list-style: none;
`;

export const TagsButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: white;
    stroke: white;
  }
`;

export const HighlightVideo = styled.video`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const LoadContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 10px;

  span {
    color: var(--main-text);
    font-size: 14px;
    margin-left: auto;
    display: flex;
    gap: 6px;
    
  }

  svg {
    stroke: var(--main-text);
    fill: transparent;
  }
`;
