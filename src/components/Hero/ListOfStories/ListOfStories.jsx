import StoryItem from "../StoryItem/StoryItem";
import { StoriesContainer } from "./ListOfStories.styled";

const ListOfStories = ({ stories }) => {
     console.log("Rendering stories:", stories);
  

  return (
    <StoriesContainer>
      {stories.map((story, index) => (
        <StoryItem
          key={story.id || index}
          title={story.title || `Story ${index + 1}`}
          image={story.image_versions?.items?.[0]?.url || ""}
          video={story.video_url || ""}
        />
      ))}
    </StoriesContainer>
  );
};

export default ListOfStories;
