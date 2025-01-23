import styled from "styled-components";

export const StoryCard = styled.div`
  width: 150px;
  height: 200px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const StoryImage = styled.img`
  width: 80%;
  height: auto;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const StoryTitle = styled.h4`
  font-size: 14px;
  text-align: center;
  color: #333;
`;
