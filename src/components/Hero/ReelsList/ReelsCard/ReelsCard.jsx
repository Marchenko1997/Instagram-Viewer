import {
  ReelsCardContainer,
  ReelsVideo,
  ReelsCaption,
} from "./ReelsCard.styled";

const ReelsCard = ({ videoUrl, caption, likeCount }) => {
  return (
    <ReelsCardContainer>
      <ReelsVideo src={videoUrl} controls />
      <ReelsCaption>
        <p>{caption}</p>
        <span>{likeCount} likes</span>
      </ReelsCaption>
    </ReelsCardContainer>
  );
};

export default ReelsCard;
