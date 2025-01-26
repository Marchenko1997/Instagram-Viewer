import {
  StoryCard,
  StoryImage,
  StoryVideo,
} from "./StoryItem.styled";

const StoryItem = ({ title, image, video }) => {
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
    </StoryCard>
  );
};

export default StoryItem;
