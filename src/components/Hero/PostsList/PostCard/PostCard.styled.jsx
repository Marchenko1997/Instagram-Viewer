import styled from "styled-components";

export const PostCardContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const PostImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const PostVideo = styled.video`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  gap: 10px;
  background-color: var(--bg-main-darker);
  color: var(--main-text);
  font-size: 18px;
`;

export const PostMeta = styled.div`
  display: flex;
  flex-direction: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 8px;
  border-radius: 10px;
  width: 100%;
  gap: 15px;
  background-color: var(--bg-main-darker);
  color: var(--main-text);
  font-size: 18px;

  p {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  svg {
    stroke: var(--main-text);
    fill: transparent;
  }

  span {
    display: flex;
    gap: 6px;
    align-items: center;
    margin-left: auto;
  }
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