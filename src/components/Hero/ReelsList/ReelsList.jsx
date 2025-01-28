import { useSelector } from "react-redux";
import {
  selectReels,
  selectReelsLoading,
  selectReelsError,
} from "../../../redux/reels/selectors";
import ReelsCard from "./ReelsCard/ReelsCard";
import { ReelsContainer } from "./ReelsList.styled";

const ReelsList = () => {
  // Получаем данные из Redux-состояния
  const reels = useSelector(selectReels);
  const isLoading = useSelector(selectReelsLoading);
  const error = useSelector(selectReelsError);

  // Обработка состояния загрузки, ошибок и отображение списка
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ReelsContainer>
      {reels.map((reel) => (
        <ReelsCard
          key={reel.id}
          videoUrl={reel.video_url} // Убедитесь, что `video_url` соответствует данным API
          caption={reel.caption}
          likeCount={reel.like_count}
        />
      ))}
    </ReelsContainer>
  );
};

export default ReelsList;
