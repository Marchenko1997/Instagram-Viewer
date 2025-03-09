import styled from "styled-components";

// Контейнер для всей пагинации
export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-top: 40px;
`;


export const PageButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  transition: opacity 0.3s ease-in-out, transform 0.2s ease-in-out; /* Анимация */

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  svg {
    fill: var(--color-secondary-dark, #fff);
    width: 32px;
    height: 32px;
    transition: transform 0.2s ease-in-out;

    &:hover,
    &:focus {
      transform: scale(1.3); 
    }
  }
`;


export const PageNumber = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: var(--main-text, #fff);
  padding: 8px 12px;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;
  border-radius: 6px;



  &.active {
    background-color: var(--color-accent);
    color: #fff;
  }
`;
