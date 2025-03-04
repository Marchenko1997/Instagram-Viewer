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

  @media screen and (min-width: 768px) {
    width: 90%;
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
  }
`;

export const PostImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

export const PostVideo = styled.video`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  border-radius: 10px;
  width: 100%;
  gap: 8px;
  background-color: var(--bg-main-darker);
  color: var(--main-text);
  font-size: 16px;

  @media screen and (min-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;    
  }
`;

export const PostMeta = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 6px;
  border-radius: 10px;
  width: 100%;
  gap: 10px;
  background-color: var(--bg-main-darker);
  color: var(--main-text);
  font-size: 16px;

  p {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  svg {
    stroke: var(--main-text);
    fill: transparent;
  }

  span {
    display: flex;
    gap: 4px;
    align-items: center;
    margin-left: auto;
  }

  @media screen and (min-width: 768px) {
    padding: 8px;
    gap: 15px;
    font-size: 14px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
`;

export const TagsContainer = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
  display: inline-flex;
  align-items: center;
  background: hsla(0, 0%, 9%, 0.6);
  border-radius: 44px;
  padding: 2px 8px;
  gap: 6px;
  justify-content: center;
  list-style: none;

  @media screen and (min-width: 768px) {
    right: 10px;
    top: 10px;
    padding: 4px 10px;
    gap: 8px;
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
