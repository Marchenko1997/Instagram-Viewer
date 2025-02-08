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
  padding: 0, 20px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const StoryImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 0 0;
`;


export const StoryVideo = styled.video`
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 0 0;
`;

export const LoadContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;