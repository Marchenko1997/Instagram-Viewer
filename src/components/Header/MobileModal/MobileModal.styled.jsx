import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  padding: 40px;
  justify-content: flex-end;
  z-index: 1000;
  backdrop-filter: blur(4px);
  animation: 400msease 0s 1 normal none running appear;
`;

export const ModalContent = styled.div`
  background: linear-gradient(
    135deg,
    rgba(161, 19, 146, 0.4) 0%,
    /* Темнее, но с 40% прозрачности */ rgba(161, 19, 146, 0.65) 50%,
    /* Умеренно темный */ rgba(161, 19, 146, 0.9) 100%
      /* Почти полностью насыщенный */
  );
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 320px;
  height: 600px;
  position: relative;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  border-radius: 25px;
  animation: 600msease 0s 1 normal none running appear;
`;

export const Stripe = styled.div`
  width: 100%;
  padding: 0px 0px 8px;
  border-bottom: 2px solid var(--bg-main);
  margin-top: 12px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;

  svg {
    stroke: var(--bg-main);
    width: 20px;
    height: 20px;
  }

  &:hover, &:focus {
    color: var(--bg-secondary);
    transform: scale(1.1);
  }
`;
