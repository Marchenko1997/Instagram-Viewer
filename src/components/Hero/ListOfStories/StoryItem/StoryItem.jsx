import {
  StoryCard,
  StoryImage,
  StoryVideo,
  LoadContainer
} from "./StoryItem.styled";
import DownloadBtn from "../../../Common/DownloadBtn/DownloadBtn";
import { formatDistanceToNowStrict } from "date-fns";

const proxyUrl = "http://localhost:3001/proxy";

const StoryItem = ({ title, image, video, takenAt }) => {

  const isVideo = video && video.trim();
  
 const mediaUrl = isVideo
   ? `${proxyUrl}?url=${encodeURIComponent(video)}`
    : `${proxyUrl}?url=${encodeURIComponent(image)}`;
  
  const publishedDate = takenAt
    ? formatDistanceToNowStrict(new Date(takenAt * 1000), { addSuffix: true })
    : "Unknown";

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
        <p>{publishedDate}</p>
      </LoadContainer>
    </StoryCard>
  );
};

export default StoryItem;
