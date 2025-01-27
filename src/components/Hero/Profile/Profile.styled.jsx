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

export const Avatar = styled.img`
  grid-area: avatar;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid var(--color-border); 
`;

export const Username = styled.h2`
  grid-area: username;
  font-family: Roboto, sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  margin-bottom: 0;
  color: var(--main-text); 
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