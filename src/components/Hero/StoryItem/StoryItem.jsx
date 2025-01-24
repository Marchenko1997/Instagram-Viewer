import { StoryCard, StoryImage, StoryTitle, StoryVideo } from "./StoryItem.styled"

const StoryItem = ({ title, image, video }) => {
  return (
    <StoryCard>
      {video && video.trim() ? (
        <StoryVideo controls>
          <source src={video} type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </StoryVideo>
      ) : (
        <StoryImage src={image} alt={title} />
      )}
      <StoryTitle title={title} />
    </StoryCard>
  );
};

export default StoryItem