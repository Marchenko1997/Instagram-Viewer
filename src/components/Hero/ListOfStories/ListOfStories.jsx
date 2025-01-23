import StoryItem from "../StoryItem/StoryItem";
import { useSelector } from "react-redux";
import {
  selectStories,
  selectIsLoading,
  selectError,
} from "../../../redux/selectors";
import { StoriesContainer } from "./ListOfStories.styled";

const ListOfStories = () => {
  const stories = useSelector(selectStories);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  if (isLoading) {
    return <p>Загрузка историй...</p>;
  }

  if (error) {
    return <p>Ошибка: {error}</p>;
  }

  return (
    <StoriesContainer>
      {stories.map((story) => (
        <StoryItem
          key={story.id}
          title={story.title}
          image={story.image}
        />
      ))}
    </StoriesContainer>
  );
};

export default ListOfStories;
