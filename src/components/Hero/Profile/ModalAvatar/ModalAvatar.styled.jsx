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
  width: 100%;
  max-width: 280px;
  max-height: 300px;
  border-radius: 8px;
  padding: 12px;
  position: relative;

  @media screen and (min-width: 768px) {
    max-width: 450px;
    max-height: 450px;
    border-radius: 10px;
    padding: 16px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 600px;
    max-height: 600px;
    border-radius: 12px;
    padding: 20px;
  }
`;

export const ModalAvatarImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 250px;
  max-height: 250px;
  border-radius: 6px;
  object-fit: contain;

  @media screen and (min-width: 768px) {
    max-width: 450px;
    max-height: 450px;
    border-radius: 8px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 550px;
    max-height: 550px;
    border-radius: 10px;
  }
`;

export const LoadButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(136, 85, 220, 0.969);
  border: 2px solid rgba(136, 85, 220, 0.969);
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
    width: 14px;
    height: 14px;
  }

  @media screen and (min-width: 768px) {
    top: 25px;
    right: 25px;
    width: 35px;
    height: 35px;

    svg {
      width: 16px;
      height: 16px;
    }
  }

  @media screen and (min-width: 1280px) {
    top: 35px;
    right: 35px;
    width: 40px;
    height: 40px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;
