import { HighlightsContainer } from "./HighLightCardsGallery.styled";
import HighlightCard from "../HighLightCard/HighLightCard";
import Loader from "../../../Common/Loader/Loader";
import { useGetHighlightMediaQuery } from "../../../../redux/highlightsInfo/operations";

const HighLightCardsGallery = ({ highlight }) => {
  const {
    data: media,
    isLoading,
    error,
  } = useGetHighlightMediaQuery(highlight.id);

  console.log("🎥 Rendering HighLightCardsGallery:", {
    highlight,
    media,
    isLoading,
  });

  if (isLoading) return <Loader />;
  if (error) return <p>⚠️ Error loading media</p>;
  if (!media || media.length === 0) return <p>📭 No media available</p>;

  return (
    <HighlightsContainer>
      {media.map((story, index) => (
        <HighlightCard key={`${highlight.id}-${index}`} highlight={story} />
      ))}
    </HighlightsContainer>
  );
};

export default HighLightCardsGallery;
