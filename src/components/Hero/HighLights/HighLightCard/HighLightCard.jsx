import {
  HighlightCardContainer,
  HighlightImage,
  HighlightVideo,
} from "./HighLightCard.styled";

const proxyUrl = "http://localhost:3001/proxy"; 

const HighlightCard = ({ highlight }) => {
  if (!highlight) {
    console.error("Highlight data is missing");
    return null;
  }

  const isVideo = highlight.media_type === 2; 
  const mediaUrl =
    highlight.video_url ||
    highlight.image_versions2?.candidates?.[0]?.url ||
    highlight.thumbnail_url;

  if (!mediaUrl) {
    console.error("Invalid media URL for highlight:", highlight);
    return null;
  }

  const proxiedMediaUrl = `${proxyUrl}?url=${encodeURIComponent(mediaUrl)}`;

  return (
    <HighlightCardContainer>
      {isVideo ? (
        <HighlightVideo src={proxiedMediaUrl} controls />
      ) : (
        <HighlightImage src={proxiedMediaUrl} alt="Highlight Media" />
      )}
    </HighlightCardContainer>
  );
};

export default HighlightCard;
