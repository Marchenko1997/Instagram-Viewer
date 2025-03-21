import styled from "styled-components";

export const PrivateProfileMessage = styled.p`
  color: red;
  border: 1px solid red;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  margin-top: 20px;
  font-size: 12px;
  font-weight: 500;
  background: rgba(255, 0, 0, 0.1);

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;
