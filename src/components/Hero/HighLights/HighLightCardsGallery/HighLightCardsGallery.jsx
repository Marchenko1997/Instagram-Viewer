import { HighlightsContainer } from "./HighLightCardsGallery.styled";
import HighlightCard from "../HighLightCard/HighLightCard";

const HighLightCardsGallery = ({ highlight, media, isLoading }) => {
  if (isLoading) {
    return <p>Loading stories...</p>;
  }

  if (!media || media.length === 0) {
    return <p>No media available</p>;
  }

  return (
    <HighlightsContainer>
      {media.map((story, index) => (
        <HighlightCard key={`${highlight.id}-${index}`} highlight={story} />
      ))}
    </HighlightsContainer>
  );
};

export default HighLightCardsGallery;
