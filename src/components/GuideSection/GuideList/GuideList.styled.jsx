import styled from "styled-components";

export const ListWrapper = styled.div`
  text-align: center;
  color: var(--main-text);
  margin-top: 140px;
`;

export const ListTitle = styled.h2`
  font-size: 44px;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 20px;

  @media screen and (min-width: 992px) {
    font-size: 38px;
  }

  @media screen and (min-width: 1600px) {
    font-size: 44px;
  }
`;
