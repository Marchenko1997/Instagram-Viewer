import styled from "styled-components";

export const DownloadPageContainer = styled.div`
  text-align: center;
  color: var(--color-secondary-dark);
  background-color: var(--bg-main);
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: appear 0.8s ease-in-out;
  padding: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 100px;
  }
`;

export const Heading = styled.h1`
  font-size: 1.7rem;
  margin-bottom: 15px;
  animation: slideInLeft 1s ease-in-out;

  @media screen and (min-width: 768px) {
    font-size: 2.2rem;
  }

  @media screen and (min-width: 1280px) {
    font-size: 3rem;
  }
`;

export const CardGeneral = styled.div`
  border-radius: 10px;
  padding: 15px;
  margin: 15px auto;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  background-color: var(--color-card-bg);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: slideInRight 1s ease-in-out;

  @media screen and (min-width: 768px) {
    max-width: 750px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1000px;
    flex-direction: row;
    padding: 20px;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;

  @media screen and (min-width: 1280px) {
    padding: 20px;
  }
`;

export const SubHeading = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    font-size: 1.8rem;
  }

  @media screen and (min-width: 1280px) {
    font-size: 2rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  margin: 8px 0;
  color: var(--color-secondary-light);
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 1.3rem;
    text-align: left;
  }

  @media screen and (min-width: 1280px) {
    font-size: 1.5rem;
  }
`;

export const MediaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const PreviewImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 15px;

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
    width: 400px;
  }
`;

export const PreviewVideo = styled.video`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 15px;

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
    width: 400px;
  }
`;

export const DownloadButton = styled.button`
  background: #6c63ff;
  color: #fff;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  width: 220px;

  &:hover {
    color: #fff;
    background: linear-gradient(
      266.47deg,
      #2713a1 -15.35%,
      #a11392 24.88%,
      #efac59 101.06%
    );
  }

  @media screen and (min-width: 768px) {
    padding: 10px 20px;
    font-size: 1rem;
    width: 250px;
  }

  @media screen and (min-width: 1280px) {
    width: 300px;
  }
`;

export const MessageContainer = styled.div`
  margin-right: auto;
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 2px solid var(--color-secondary-dark);
  background: transparent;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    fill: var(--color-secondary-dark);
  }

  @media screen and (min-width: 768px) {
    width: 45px;
    height: 45px;
    border-width: 3px;
  }

  @media screen and (min-width: 1280px) {
    width: 50px;
    height: 50px;
  }
`;
