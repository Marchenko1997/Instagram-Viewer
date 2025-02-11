import { useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import {
  selectReels,
  selectReelsLoading,
  selectReelsError,
} from "../../../redux/reels/selectors";
import ReelsCard from "./ReelsCard/ReelsCard";
import { ReelsContainer } from "./ReelsList.styled";
import Loader from "../../Common/Loader/Loader";

const ReelsList = () => {
 
  const reels = useSelector(selectReels);
  const isLoading = useSelector(selectReelsLoading);
  const error = useSelector(selectReelsError);


  useEffect(() => {
    if (error) {
      toast.error(`Error: ${error}`);
    }
  }, [error]);

  if (isLoading) return <Loader />;
  if (error) return null;
 
  const validReels = reels.filter((reel) => reel.videoUrl);

  return (
    <ReelsContainer>
      {validReels.map((reel) => (
        <ReelsCard
          key={reel.id}
          videoUrl={reel.videoUrl}
          caption={reel.caption}
          likeCount={reel.likeCount}
          createdAt={reel.createdAt} 
          commentCount={reel.commentCount}
        />
      ))}
    </ReelsContainer>
  );
};

export default ReelsList;
