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
  max-width: 320px;
  max-height: 400px;
  border-radius: 12px;
  padding: 15px;
  position: relative;

  @media screen and (min-width: 768px) {
    max-width: 450px;
    max-height: 500px;
    padding: 20px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 600px;
    max-height: 600px;
    padding: 20px;
  }
`;

export const MediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 280px;
  max-height: 350px;
  position: relative;

  img,
  video {
    width: 100% !important;
    max-width: 270px !important;
    max-height: 350px;
    border-radius: 10px;
    object-fit: contain;
  }

  @media screen and (min-width: 768px) {
    max-width: 400px;
    max-height: 500px;

    img,
    video {
      max-width: 400px !important;
      max-height: 500px;
    }
  }

  @media screen and (min-width: 1280px) {
    max-width: 550px;
    max-height: 550px;

    img,
    video {
      max-width: 547px !important;
      max-height: 683px;
    }
  }
`;

export const LoadButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
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
  }

  @media screen and (min-width: 768px) {
    top: 10px;
    right: 10px;
    width: 35px;
    height: 35px;
  }

  @media screen and (min-width: 1280px) {
    top: -55px;
    right: 15px;
    width: 40px;
    height: 40px;
  }
`;

export const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  width: 25px;
  height: 25px;
  border: none;
  background: transparent;
  cursor: pointer;
  transform: translateY(-50%);
  display: flex;
  background: #fff;
  border-radius: 50%;
  align-items: center;
  justify-content: center;

  ${({ $isLoading }) =>
    $isLoading
      ? `
        &.prev {
          left: -200px;
        }

        &.next {
          right: -200px;
        }
      `
      : `
        &.prev {
          left: -30px;
        }

        &.next {
          right: -30px;
        }
      `}

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

  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;

    ${({ $isLoading }) =>
      $isLoading
        ? `
          &.prev {
            left: -250px;
          }

          &.next {
            right: -250px;
          }
        `
        : `
          &.prev {
            left: -40px;
          }

          &.next {
            right: -40px;
          }
        `}
  }

  @media screen and (min-width: 1280px) {
    width: 30px;
    height: 30px;

    ${({ $isLoading }) =>
      $isLoading
        ? `
          &.prev {
            left: -325px;
          }

          &.next {
            right: -325px;
          }
        `
        : `
          &.prev {
            left: -50px;
          }

          &.next {
            right: -50px;
          }
        `}
  }
`;
