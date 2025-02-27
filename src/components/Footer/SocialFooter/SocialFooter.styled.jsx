import styled from "styled-components";

export const SocialWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-left: 780px;
`;

export const SocialLink = styled.a`
  font-size: 16px;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease, transform 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: var(--color-accent-hover);
    transform: scale(1.1);
  }
`;

export const SvgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SvgIcon = styled.svg`
  width: 28px;
  height: 28px;
  fill: var(--color-accent);
  transition: fill 0.3s ease;

  ${SocialLink}:hover & {
    fill: var(--color-accent-hover);
  }
`;
