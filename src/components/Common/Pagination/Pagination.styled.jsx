import styled from "styled-components";


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
  transition: opacity 0.3s ease-in-out;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  svg {
    fill: var(--color-secondary-dark, #fff);
    width: 32px;
    height: 32px;
    transition: transform 0.2s ease-in-out; /* 🔥 Добавляем плавное увеличение */

    &:hover,
    &:focus {
      transform: scale(1.3); /* 🔍 Увеличение стрелки на 20% */
    }
  }
`;


// Отображение номера страницы
export const PageNumber = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: var(--main-text, #fff);
`;
