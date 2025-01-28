import {
  ReelsCardContainer,
  ReelsVideo,
  ReelsCaption,
} from "./ReelsCard.styled";

const proxyUrl = "https://proxy-server-1-6sj7.onrender.com/proxy";

const ReelsCard = ({ videoUrl, likeCount }) => {
      if (!videoUrl) {
        console.error("Invalid video URL for reel");
        return null;
    }
    
     const proxiedVideoUrl = `${proxyUrl}?url=${encodeURIComponent(videoUrl)}`;

  return (
    <ReelsCardContainer>
      <ReelsVideo src={proxiedVideoUrl} controls />
      <ReelsCaption>
        <span>{likeCount} likes</span>
      </ReelsCaption>
    </ReelsCardContainer>
  );
};

export default ReelsCard;
