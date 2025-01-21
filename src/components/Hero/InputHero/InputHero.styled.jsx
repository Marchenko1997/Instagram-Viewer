import styled from "styled-components";

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 1280px) {
      margin-top: 80px;
    }
        
`

export const StyledField = styled.input`
  width: 100%;
  height: 42px;
  padding: 12px;
  border: 1px solid var(--color-accent);
  border-radius: 30px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  color: var(--color-shadow);

  &::placeholder {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.03em;
    color: var(--placeholder-color);
  }

  &:focus {
    outline: none; 
  }

  @media screen and (min-width: 768px) {
    width: 480px;
    height: 52px;
    padding: 16px;
    font-size: 16px;

    &::placeholder {
      font-size: 16px;
    }
  }
`;