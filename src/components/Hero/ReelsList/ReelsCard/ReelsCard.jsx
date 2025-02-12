import {
  ReelsCardContainer,
  ReelsVideo,
  ReelsCaption,
  ReelsMeta,
  TagsContainer,
  TagsButton,
} from "./ReelsCard.styled";
import DownloadBtn from "../../../Common/DownloadBtn/DownloadBtn";
import { formatDistanceToNow } from "date-fns";
import sprite from "../../../../images/sprite.svg";

const proxyUrl = "http://localhost:3001/proxy";

const ReelsCard = ({ videoUrl, likeCount, createdAt, commentCount }) => {
  if (!videoUrl) {
    console.error("Invalid video URL for reel");
    return null;
  }

  const proxiedVideoUrl = `${proxyUrl}?url=${encodeURIComponent(videoUrl)}`;

  console.log("ReelsCard Props:", {
    videoUrl,
    likeCount,
    createdAt,
    commentCount,
  });

  const publishedDate = createdAt
    ? formatDistanceToNow(new Date(createdAt * 1000), { addSuffix: false })
    : "Unknown";

  return (
    <ReelsCardContainer>
      <ReelsVideo src={proxiedVideoUrl} controls />
      <TagsContainer>
        <TagsButton>
          <svg width={30} height={30}>
            <use xlinkHref={`${sprite}#icon-maximize`}></use>
          </svg>
        </TagsButton>
      </TagsContainer>
      <ReelsCaption>
        <DownloadBtn mediaUrl={proxiedVideoUrl} mediaType={2} />
        <ReelsMeta>
          <p>
            <svg width={18} height={18}>
              <use xlinkHref={`${sprite}#icon-heart`}></use>
            </svg>
            {likeCount}
          </p>
          <p>
            <svg width={18} height={18}>
              <use xlinkHref={`${sprite}#icon-message-circle`}></use>
            </svg>
            {commentCount}
          </p>
          <span>
            <svg width={18} height={18}>
              <use xlinkHref={`${sprite}#icon-clock`}></use>
            </svg>
            {publishedDate}
          </span>
        </ReelsMeta>
      </ReelsCaption>
    </ReelsCardContainer>
  );
};

export default ReelsCard;
