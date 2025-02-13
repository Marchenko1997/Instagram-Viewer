import {
  HighlightCardContainer,
  HighlightImage,
  HighlightVideo,
  LoadContainer,
  TagsContainer,
  TagsButton,
} from "./HighLightCard.styled";
import DownloadBtn from "../../../Common/DownloadBtn/DownloadBtn";
import { formatDistanceToNowStrict } from "date-fns";
import sprite from "../../../../images/sprite.svg";


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
      <TagsContainer>
              <TagsButton>
                <svg width={30} height={30}>
                  <use xlinkHref={`${sprite}#icon-maximize`}></use>
                </svg>
              </TagsButton>
            </TagsContainer>
      <LoadContainer>
        <DownloadBtn
          mediaUrl={proxiedMediaUrl}
          mediaType={highlight.media_type}
        />
        <span>
          <svg width={18} height={18}>
            <use xlinkHref={`${sprite}#icon-clock`}></use>
          </svg>
          {publishedDate}
        </span>
      </LoadContainer>
    </HighlightCardContainer>
  );
};

export default HighlightCard;
