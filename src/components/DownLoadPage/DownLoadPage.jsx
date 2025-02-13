import {
  DownloadPageContainer,
  DownloadButton,
  MessageContainer,
  Heading,
  CardGeneral,
  CardInfo,
  SubHeading,
  Paragraph,
  MediaContainer,
    PreviewImage,
  PreviewVideo,
  BackButton,
} from "./DownLoadPage.styled";
import { useNavigate, useLocation } from "react-router-dom";
import sprite from "../../images/sprite.svg";

const DownLoadPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

 

  const mediaUrl = location.state?.mediaUrl;
  const isVideo = location.state?.mediaType === 2;



  const handleBack = () => {
    navigate("/");
  };

  const handleDownload = () => {
      if (mediaUrl) {
      const link = document.createElement("a");
      link.href = mediaUrl;
      link.download = isVideo ? "downloaded-video.mp4" : "downloaded-image.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <>
      <DownloadPageContainer>
        <MessageContainer>
          <BackButton onClick={handleBack} aria-label="Go Back">
            <svg width={24} height={24}>
              <use xlinkHref={`${sprite}#icon-arrow-left`} />
            </svg>
          </BackButton>
        </MessageContainer>
        <Heading>Download Page</Heading>
        <CardGeneral>
          <CardInfo>
            <SubHeading>Your file is ready</SubHeading>
            <Paragraph>
              This is a download page on our site. We do not store your data or
              host any content on our server. Use our app to download any video
              or photo from Instagram to your device - free, safe, fast and
              anonymous.
            </Paragraph>
          </CardInfo>
          <MediaContainer>
            {mediaUrl ? (
              isVideo ? (
                <PreviewVideo src={mediaUrl} controls>
                  Your browser does not support the video tag.
                </PreviewVideo>
              ) : (
                <PreviewImage src={mediaUrl} alt="Preview" />
              )
            ) : (
              <Paragraph>No media available</Paragraph>
            )}
            <DownloadButton onClick={handleDownload}>Download</DownloadButton>
          </MediaContainer>
        </CardGeneral>
      </DownloadPageContainer>
    </>
  );
};

export default DownLoadPage;
