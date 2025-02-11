import {
  ReelsCardContainer,
  ReelsVideo,
  ReelsCaption,
  ReelsMeta
} from "./ReelsCard.styled";
import DownloadBtn from "../../../Common/DownloadBtn/DownloadBtn";
import { formatDistanceToNow } from "date-fns";

const proxyUrl = "http://localhost:3001/proxy"; 

const ReelsCard = ({ videoUrl, likeCount, createdAt, commentCount }) => {
  if (!videoUrl) {
    console.error("Invalid video URL for reel");
    return null;
  }

  const proxiedVideoUrl = `${proxyUrl}?url=${encodeURIComponent(videoUrl)}`;

  const publishedDate = createdAt
    ? formatDistanceToNow(new Date(createdAt * 1000), { addSuffix: false })
    : "Unknown";

  return (
    <ReelsCardContainer>
      <ReelsVideo src={proxiedVideoUrl} controls />
      <ReelsCaption>
        <DownloadBtn mediaUrl={proxiedVideoUrl} mediaType={2} />
        <ReelsMeta>
          <span>{likeCount}</span>
          <span>{commentCount}</span>
          <span>{publishedDate}</span>
        </ReelsMeta>
      </ReelsCaption>
    </ReelsCardContainer>
  );
};

export default ReelsCard;
