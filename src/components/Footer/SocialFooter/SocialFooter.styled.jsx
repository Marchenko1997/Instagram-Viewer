import styled from "styled-components";

export const SocialWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: auto;
  margin-left: 0;

  @media screen and (min-width: 768px) {
    margin-left: auto;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 1080px; 
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px; 
  text-align: center;

  @media screen and (min-width: 768px) {
    gap: 10px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 10px;
  }
`;

export const SocialLink = styled.a`
  font-size: 12px;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease, transform 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: var(--bg-secondary);
    transform: scale(1.1);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
`;

export const SvgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SvgIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: var(--color-accent);
  transition: fill 0.3s ease;

  ${SocialLink}:hover & {
    fill: #df9c49;
  }

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }

  @media screen and (min-width: 1280px) {
    width: 28px;
    height: 28px;
  }
`;
