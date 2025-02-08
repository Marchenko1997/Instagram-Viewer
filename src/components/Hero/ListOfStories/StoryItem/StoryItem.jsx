import {
  StoryCard,
  StoryImage,
  StoryVideo,
  LoadContainer
} from "./StoryItem.styled";
import DownloadBtn from "../../../Common/DownloadBtn/DownloadBtn";

const proxyUrl = "http://localhost:3001/proxy";

const StoryItem = ({ title, image, video }) => {

  const isVideo = video && video.trim();
  
 const mediaUrl = isVideo
   ? `${proxyUrl}?url=${encodeURIComponent(video)}`
   : `${proxyUrl}?url=${encodeURIComponent(image)}`;

  return (
    <StoryCard>
      {video && video.trim() ? (
        <StoryVideo controls>
          <source src={video} type="video/mp4" />
          Your browser does not support video.
        </StoryVideo>
      ) : (
        <StoryImage src={image} alt={title} />
      )}
      <LoadContainer>
        <DownloadBtn mediaUrl={mediaUrl} mediaType={isVideo ? 2 : 1} />
      </LoadContainer>
    </StoryCard>
  );
};

export default StoryItem;
