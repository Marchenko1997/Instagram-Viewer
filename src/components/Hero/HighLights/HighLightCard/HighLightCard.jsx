import {
  HighlightCardContainer,
  HighlightImage,
  HighlightVideo,
  LoadContainer
} from "./HighLightCard.styled";
import DownloadBtn from "../../../Common/DownloadBtn/DownloadBtn";
import { formatDistanceToNowStrict } from "date-fns";

const proxyUrl = "http://localhost:3001/proxy";

const HighlightCard = ({ highlight }) => {
  if (!highlight) {
    console.error("Highlight data is missing");
    return null;
  }

  const isVideo = highlight.media_type === 2;
  const mediaUrl = highlight.video_url || highlight.media_url;

  if (!mediaUrl) {
    console.error("Invalid media URL for highlight:", highlight);
    return null;
  }

  const proxiedMediaUrl = `${proxyUrl}?url=${encodeURIComponent(mediaUrl)}`;

     const publishedDate = highlight.taken_at
       ? formatDistanceToNowStrict(new Date(highlight.taken_at * 1000), {
           addSuffix: true,
         })
       : "Unknown";


  return (
    <HighlightCardContainer>
      {isVideo ? (
        <HighlightVideo src={proxiedMediaUrl} controls />
      ) : (
        <HighlightImage src={proxiedMediaUrl} alt="Highlight Media" />
      )}
      <LoadContainer>
        <DownloadBtn
          mediaUrl={proxiedMediaUrl}
          mediaType={highlight.media_type}
        />
        <p> {publishedDate}</p>
      </LoadContainer>
    </HighlightCardContainer>
  );
};

export default HighlightCard;
