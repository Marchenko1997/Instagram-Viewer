import StoryItem from "./StoryItem/StoryItem";
import { StoriesContainer } from "./ListOfStories.styled";
import { useSelector } from "react-redux";
import {
  selectStories,
  selectIsLoading as selectStoriesLoading,
} from "../../../redux/stories/selectors";
import Loader from "../../Common/Loader/Loader";

const ListOfStories = () => {
    const stories = useSelector(selectStories);
    const storiesLoading = useSelector(selectStoriesLoading); 
    
  
      if (storiesLoading) {
        return <Loader />; 
      }

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
