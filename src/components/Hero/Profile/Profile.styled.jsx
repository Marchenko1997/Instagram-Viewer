import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: grid;
  gap: 16px;
  grid-template-areas:
    "avatar username"
    "avatar stats"
    "avatar full-name"
    "avatar biography";
  grid-template-columns: 40% 1fr;
  margin: 0 auto;
  margin-top: 100px;
  max-width: 640px;
  font-family: Roboto, sans-serif;
`;

export const AvatarWrapper = styled.div`
  grid-area: avatar;
  position: relative;
  width: 150px;
  height: 150px;
`;


export const Avatar = styled.img`
  /* grid-area: avatar; */
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid var(--color-border);

`;

export const AvatarBtnContainer = styled.div`
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: 40px;
  height: 40px;
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
  }
`;


export const UsernameContainer = styled.div`
  grid-area: username;
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Username = styled.h2`
  font-family: Roboto, sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  margin-bottom: 0;
  color: var(--main-text);
`;

export const ProfileLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;

  svg {
    stroke: var(--main-text);
    fill: transparent;
  }
`;

export const FullName = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  grid-area: full-name;
  margin: 0;
  color: var(--tertiary-text);
`;

export const Biography = styled.p`
  font-family: Roboto, sans-serif;
  grid-area: biography;
  margin: 0;
  white-space: pre-wrap;
  font-size: 1rem;
  color: var(--secondary-text);
`;

export const Stats = styled.ul`
  display: flex;
  gap: 30px;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-style: normal;

    .stats_value {
      font-weight: 600;
      font-size: 16px;
      color: var(--main-text);
    }

    .stats_name {
      font-weight: 400;
      font-size: 14px;
      color: var(--secondary-text);
    }
  }
`;
