import { HighlightsContainer } from "./HighLightCardsGallery.styled";
import HighlightCard from "../HighLightCard/HighLightCard";

const HighLightCardsGallery = ({ highlight }) => {
  if (!highlight) {
    return <p>No highlight selected</p>;
  }

  return (
    <HighlightsContainer>
      {highlight.media_count > 0 ? (
        [...Array(highlight.media_count)].map((_, index) => (
          <HighlightCard
            key={`${highlight.id}-${index}`}
            highlight={highlight}
          />
        ))
      ) : (
        <p>No media available</p>
      )}
    </HighlightsContainer>
  );
};

export default HighLightCardsGallery;
