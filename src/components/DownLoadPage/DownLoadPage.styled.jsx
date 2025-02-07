import styled from "styled-components";

export const DownloadPageContainer = styled.div`
  text-align: center;
  color: var(--color-secondary-dark);
  background-color: var(--bg-main);
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: appear 0.8s ease-in-out;
`;

export const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  animation: slideInLeft 1s ease-in-out;
`;

export const CardGeneral = styled.div`
  border-radius: 10px;
  padding: 20px;
  margin: 20px auto;
  display: flex;
  max-width: 1000px;
  background-color: var(--color-card-bg);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: slideInRight 1s ease-in-out;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const SubHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
`;

export const Paragraph = styled.p`
  font-size: 1.5rem;
  margin: 10px 0;
  color: var(--color-secondary-light);
  text-align: left;
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
  margin-bottom: 20px;
`;

export const PreviewVideo = styled.video`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const DownloadButton = styled.button`
  background: linear-gradient(
    266.47deg,
    #2713a1 -15.35%,
    #a11392 24.88%,
    #efac59 101.06%
  );
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  width: 300px;

  &:hover {
    color: #fff;
    background: #6c63ff;
  }
`;

export const MessageContainer = styled.div`
  margin-top: 20px;
`;

export const BackButton = styled.button`
  background: #6c63ff;
  color: #fff;
  border: 1px solid #fff;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  width: 140px;

  &:hover {
    color: #fff;
    background: linear-gradient(
      266.47deg,
      #2713a1 -15.35%,
      #a11392 24.88%,
      #efac59 101.06%
    );
  }
`;
