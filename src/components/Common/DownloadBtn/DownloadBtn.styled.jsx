import styled from "styled-components";

export const DownloadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const LoadBtn = styled.a`
  background-color: rgba(136, 85, 220, 0.969);
  border: 3px solid rgba(136, 85, 220, 0.969);
  color: #fff;
  position: relative;
  border-radius: 7px;
  padding: 14px;
  width: 300px;
  height: auto;
  text-align: center;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: rgba(136, 85, 220, 0.969);
    background-color: var(--bg-main-darker);
  }
`;