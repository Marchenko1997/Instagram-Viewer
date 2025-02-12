import styled from "styled-components";

export const ReelsCardContainer = styled.div`
  width: 360px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  background-color: var(--bg-main-darker);
  position: relative;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const ReelsVideo = styled.video`
  width: 100%;
  height: auto;
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

export const ReelsCaption = styled.div`
  margin-top: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  gap: 10px;
  color: var(--main-text);

  p {
    font-size: 14px;
    margin: 5px 0;
    display: flex;
    gap: 6px;
  }

  span {
    font-size: 14px;
    margin-left: auto;
    display: flex;
    gap: 6px;
  }
`;

export const ReelsMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  svg {
    stroke: var(--main-text);
    fill: transparent;
  }
`;
