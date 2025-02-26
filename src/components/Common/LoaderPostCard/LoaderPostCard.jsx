import { LoaderContainer } from "./LoaderPostCard.styled";
import { RotatingLines } from "react-loader-spinner";

const LoaderPostCard = () => {
  return (
    <LoaderContainer>
      <RotatingLines
        visible={true}
        height="80"
        width="80"
        strokeColor="#AAAAAA" 
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </LoaderContainer>
  );
};

export default LoaderPostCard;
