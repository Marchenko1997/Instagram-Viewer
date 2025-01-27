import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const TabsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 40px;
  border-top: 1px solid var(--main-text); 
`;

export const TabLink = styled(NavLink)`
  display: inline-block;
  padding: 16px 12px;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  color: var(--color-placeholder); 
  background: transparent;
  border: none;
  cursor: pointer;

  &.active {
    color: var(--color-accent-hover);
    border-top: 3px solid var(--color-accent-hover); 
    margin-top: -1px;
  }

  &:hover {
    color: var(--color-accent-hover); 
  }
`;