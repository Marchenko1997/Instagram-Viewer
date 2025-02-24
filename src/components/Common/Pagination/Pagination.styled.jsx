import styled from "styled-components";

// Основной контейнер для пагинации
export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-top: 40px;
`;

// Кнопки "назад" и "вперед"
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
  }
`;

// Отображение номера страницы
export const PageNumber = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: var(--main-text, #fff);
`;
