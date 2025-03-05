import styled from "styled-components";

export const StoryCard = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s, box-shadow 0.3s;
  background-color: var(--bg-main-darker);
  padding: 0 ;
  position: relative;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }


`;

export const StoryImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px 10px 0 0;
`;

export const StoryVideo = styled.video`
  width: 100%;
  height: auto;
  border-radius: 10px 10px 0 0;
`;

export const TagsContainer = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
  display: inline-flex;
  align-items: center;
  background: hsla(0, 0%, 9%, 0.6);
  border-radius: 44px;
  padding: 4px 8px;
  gap: 6px;
  justify-content: center;
  list-style: none;

  @media screen and (min-width: 768px) {
    right: 10px;
    top: 10px;
    padding: 4px 10px;
    gap: 8px;
  }

  @media screen and (min-width: 1280px) {
    right: 10px;
    top: 10px;
    padding: 4px 10px;
    gap: 8px; /* Без изменений */
  }
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

export const LoadContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 15px;
  font-size: 12px;
  color: var(--main-text);

  span {
    margin-left: auto;
    display: flex;
    gap: 5px;
  }

  svg {
    stroke: var(--main-text);
    fill: transparent;
  }

  @media screen and (min-width: 768px) {
    padding: 20px;
    font-size: 14px;
    gap: 10px;
  }

  @media screen and (min-width: 1280px) {
    padding: 20px;
    font-size: 14px;
    gap: 10px;
  }
`;
