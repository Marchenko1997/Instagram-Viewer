import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  max-height: 600px;
  border-radius: 12px;
  padding: 20px;
  position: relative;
`;

export const MediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 550px;
  max-height: 550px;
  position: relative;

  img,
  video {
    max-width: 100%;
    max-height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;

export const LoadButton = styled.button`
  position: absolute;
  top: -55px;
  right: 15px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(136, 85, 220, 0.969);
  border: 3px solid rgba(136, 85, 220, 0.969);
  border-radius: 50%;
  cursor: pointer;
  z-index: 2;
  transition: transform 0.2s ease-in-out;

  &:hover {
    border-color: #ffd700;
  }

  svg {
    stroke: #fff;
    fill: rgba(136, 85, 220, 0.969);
  }
`;

export const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  width: 30px;
  height: 30px;
  border: none;
  background: transparent;
  cursor: pointer;
  transform: translateY(-50%);
  display: flex;
  background:#fff; 
  border-radius: 50%; 
  align-items: center;
  justify-content: center;

  &.prev {
    left: -50px;
  }

  &.next {
    right: -50px;
  }

  svg {
    fill: var(--main-text);
    stroke: var(--main-text);
  }

  &:hover {
    transform: translateY(-50%) scale(1.1);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;



