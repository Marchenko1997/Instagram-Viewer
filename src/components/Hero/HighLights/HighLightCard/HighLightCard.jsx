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
import { useSelector } from "react-redux";
import { getHighlightMediaItems } from "../../../../utils/getHighlights";
import { selectHighlightMedia } from "../../../../redux/highlightsInfo/selectors";
import Modal from "../../../Common/Modal/Modal";
import { useState } from "react";

const proxyUrl = "http://localhost:3001/proxy";

const HighlightCard = ({ highlight }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log("🟠 Highlight ID:", highlight.id); // Проверяем ID
  const highlightMedia = useSelector(selectHighlightMedia(highlight.id));
  console.log("🔹 Selected Highlight Media:", highlightMedia);
  const mediaItems = getHighlightMediaItems(highlightMedia);
   console.log("✅ Processed Media Items:", mediaItems);

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

  const handleOpenModal = () => {
    console.log("Opening modal..."); // Проверяем, вызывается ли функция
    console.log("Media Items:", mediaItems); // Проверяем, есть ли данные
    console.log("Current Media URL:", proxiedMediaUrl); // Проверяем текущий URL

    const index = mediaItems.findIndex((item) => item.url === proxiedMediaUrl);
    console.log("Found Index:", index);

    setCurrentIndex(index !== -1 ? index : 0);
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
      {isModalOpen && (
        <Modal
          mediaItems={mediaItems}
          currentIndex={currentIndex}
          onClose={() => setIsModalOpen(false)}
          loadButtonTop="-195px"
        />
      )}
    </>
  );
};

export default HighlightCard;
