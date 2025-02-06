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
  BackButton,
} from "./DownLoadPage.styled";
import { useNavigate, useLocation } from "react-router-dom";

const DownLoadPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const mediaUrl = location.state?.mediaUrl;

  const handleBack = () => {
    navigate("/");
    };
    
    const handleDownload = () => { 
        if (mediaUrl) { 
            const link = document.createElement("a");
            link.href = mediaUrl;
             link.download = "downloaded-image.jpg"; 
            document.body.appendChild(link);
            link.click();
           document.body.removeChild(link);
        }
    }

  return (
    <DownloadPageContainer>
      <Heading>Download Page</Heading>
      <CardGeneral>
        <CardInfo>
          <SubHeading>Your file is ready</SubHeading>
          <Paragraph>
            This is a download page on our site. We do not store your data or
            host any content on our server. Use our app to download any video or
            photo from Instagram to your device - free, safe, fast and
            anonymous.
          </Paragraph>
        </CardInfo>
        <MediaContainer>
          {mediaUrl ? (
            <PreviewImage src={mediaUrl} alt="Preview" />
          ) : (
            <Paragraph>No media available</Paragraph>
          )}
          <DownloadButton onClick={handleDownload}>Download</DownloadButton>
        </MediaContainer>
      </CardGeneral>
      <MessageContainer>
        <BackButton onClick={handleBack}>Back</BackButton>
      </MessageContainer>
    </DownloadPageContainer>
  );
};

export default DownLoadPage;
