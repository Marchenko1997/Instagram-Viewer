import { useSelector } from "react-redux";
import {
  selectReels,
  selectReelsLoading,
  selectReelsError,
} from "../../../redux/reels/selectors";
import ReelsCard from "./ReelsCard/ReelsCard";
import { ReelsContainer } from "./ReelsList.styled";

const ReelsList = () => {
 
  const reels = useSelector(selectReels);
  const isLoading = useSelector(selectReelsLoading);
  const error = useSelector(selectReelsError);


  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

 
  const validReels = reels.filter((reel) => reel.videoUrl);

  return (
    <ReelsContainer>
      {validReels.map((reel) => (
        <ReelsCard
          key={reel.id}
          videoUrl={reel.videoUrl}
          caption={reel.caption}
          likeCount={reel.likeCount}
        />
      ))}
    </ReelsContainer>
  );
};

export default ReelsList;
