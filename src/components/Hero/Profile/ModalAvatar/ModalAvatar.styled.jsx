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


export const ModalAvatarImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 550px;
  max-height: 550px;
  border-radius: 10px;
  object-fit: contain;
`;

export const LoadButton = styled.button`
  position: absolute;
  top: 35px;
  right: 35px;
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