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
import sprite from "../../../../../public/images/sprite.svg";
import Modal from "../../../Common/Modal/Modal";
import { useState } from "react";

const proxyUrl = "https://proxy-server-1-6sj7.onrender.com/proxy";

const HighlightCard = ({ highlight }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log("🟠 Rendering HighlightCard:", highlight);

  if (!highlight) {
    console.error("❌ Highlight data is missing");
    return null;
  }

  const isVideo = highlight.media_type === 2;
  const mediaUrl = highlight.video_url || highlight.media_url;

  if (!mediaUrl) {
    console.error("❌ Invalid media URL for highlight:", highlight);
    return null;
  }

  const proxiedMediaUrl = `${proxyUrl}?url=${encodeURIComponent(mediaUrl)}`;

  const publishedDate = highlight.taken_at
    ? formatDistanceToNowStrict(new Date(highlight.taken_at * 1000), {
        addSuffix: true,
      })
    : "Unknown";

  const handleOpenModal = () => {
    console.log("🔍 Opening modal...");
    console.log("🌟 Media URL:", proxiedMediaUrl);

    setCurrentIndex(0);
    setIsModalOpen(true);
  };

  return (
    <>
      <HighlightCardContainer>
        {isVideo ? (
          <HighlightVideo src={proxiedMediaUrl} controls />
        ) : (
          <HighlightImage src={proxiedMediaUrl} alt="Highlight Media" />
        )}
        <TagsContainer>
          <TagsButton onClick={handleOpenModal} aria-label="Open modal">
            <svg width={30} height={30}>
              <use xlinkHref={`${sprite}#icon-maximize`} />
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
              <use xlinkHref={`${sprite}#icon-clock`} />
            </svg>
            {publishedDate}
          </span>
        </LoadContainer>
      </HighlightCardContainer>
      {isModalOpen && (
        <Modal
          mediaItems={[
            { url: proxiedMediaUrl, type: isVideo ? "video" : "image" },
          ]}
          currentIndex={currentIndex}
          onClose={() => setIsModalOpen(false)}
          loadButtonTop="-195px"
        />
      )}
    </>
  );
};

export default HighlightCard;
