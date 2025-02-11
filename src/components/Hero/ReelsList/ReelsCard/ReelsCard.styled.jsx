import styled from "styled-components";

export const ReelsCardContainer = styled.div`
  width: 100%;
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

export const ReelsCaption = styled.div`
  margin-top: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  gap: 10px;

  p {
    font-size: 14px;
    margin: 5px 0;
  }

  span {
    font-size: 12px;
    color: var(--main-text);
  }
`;

export const ReelsMeta = styled.div`
display: flex;
gap: 8px;
`;
