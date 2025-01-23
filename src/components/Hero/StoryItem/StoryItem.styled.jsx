import styled from "styled-components";

export const StoryCard = styled.div`
  width: 100%;
  height: auto;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const StoryImage = styled.img`
  width: 400px;
  height: 600px;
  margin-bottom: 10px;
`;

export const StoryTitle = styled.h4`
  font-size: 14px;
  text-align: center;
  color: #333;
`;
