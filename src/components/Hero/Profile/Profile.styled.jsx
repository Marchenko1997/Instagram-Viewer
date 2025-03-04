import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: grid;
  gap: 12px;
  grid-template-areas:
    "avatar"
    "username"
    "stats"
    "full-name"
    "biography";
  grid-template-columns: 1fr;
  margin: 0 auto;
  margin-top: 80px;
  max-width: 320px;
  font-family: Roboto, sans-serif;

  @media screen and (min-width: 768px) {
    gap: 16px;
    grid-template-areas:
      "avatar username"
      "avatar stats"
      "avatar full-name"
      "avatar biography";
    grid-template-columns: 40% 1fr;
    max-width: 640px;
    margin-top: 100px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 140px;
  }
`;

export const AvatarWrapper = styled.div`
  grid-area: avatar;
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
    margin: 0;
  }
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid var(--color-border);
`;

export const AvatarBtnContainer = styled.div`
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(136, 85, 220, 0.969);
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    fill: #fff;
    stroke: #fff;
    width: 16px;
    height: 16px;
  }

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const UsernameContainer = styled.div`
  grid-area: username;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const Username = styled.h2`
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  color: var(--main-text);

  @media screen and (min-width: 768px) {
    font-size: 22px;
    line-height: 26px;
  }
`;

export const ProfileLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;

  svg {
    stroke: var(--main-text);
    fill: transparent;
    width: 18px;
    height: 18px;

    @media screen and (min-width: 768px) {
      width: 22px;
      height: 22px;
    }
  }
`;

export const FullName = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  grid-area: full-name;
  text-align: center;
  margin: 0;
  color: var(--tertiary-text);

  @media screen and (min-width: 768px) {
    text-align: left;
    font-size: 1.25rem;
  }
`;

export const Biography = styled.p`
  font-family: Roboto, sans-serif;
  grid-area: biography;
  margin: 0;
  text-align: center;
  white-space: pre-wrap;
  font-size: 0.875rem;
  color: var(--secondary-text);

  @media screen and (min-width: 768px) {
    text-align: left;
    font-size: 1rem;
  }
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    gap: 30px;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;

    .stats_value {
      font-weight: 600;
      font-size: 14px;
      color: var(--main-text);

      @media screen and (min-width: 768px) {
        font-size: 16px;
      }
    }

    .stats_name {
      font-weight: 400;
      font-size: 12px;
      color: var(--secondary-text);

      @media screen and (min-width: 768px) {
        font-size: 14px;
      }
    }
  }
`;
