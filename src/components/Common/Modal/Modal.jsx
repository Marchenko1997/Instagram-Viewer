import { useEffect, useState } from "react";
import {
  ModalOverlay,
  ModalContent,
  MediaContainer,
  NavigationButton,
  LoadButton,
} from "./Modal.styled";
import sprite from "../../../../public/images/sprite.svg";
import { disableScroll, enableScroll } from "../../../utils/scrollLock";

const Modal = ({
  mediaItems = [],
  currentIndex = 0,
  onClose,
  loadButtonTop,
}) => {
  const [index, setIndex] = useState(currentIndex);

  useEffect(() => {
    disableScroll();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowRight") {
        setIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
      } else if (event.key === "ArrowLeft") {
        setIndex(
          (prevIndex) => (prevIndex - 1 + mediaItems.length) % mediaItems.length
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      enableScroll();
    };
  }, [onClose, mediaItems.length, index]);

  const handleNext = () => {
    if (mediaItems.length > 1) {
      setIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
    }
  };

  const handlePrev = () => {
    if (mediaItems.length > 1) {
      setIndex(
        (prevIndex) => (prevIndex - 1 + mediaItems.length) % mediaItems.length
      );
    }
  };

  const handleDownload = () => {
    const mediaItem = mediaItems[index];

    if (mediaItem?.url) {
      const link = document.createElement("a");
      link.href = mediaItem.url;
      link.download =
        mediaItem.type === "video"
          ? "downloaded-video.mp4"
          : "downloaded-image.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const mediaItem = mediaItems[index];

  if (!mediaItem) {
    return null;
  }

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <MediaContainer>
          {mediaItem.type === "video" ? (
            <video key={mediaItem.url} src={mediaItem.url} controls autoPlay />
          ) : (
            <img key={mediaItem.url} src={mediaItem.url} alt="Media content" />
          )}
          <LoadButton
            aria-label="Download avatar"
            onClick={handleDownload}
            top={loadButtonTop}
          >
            <svg width={24} height={24}>
              <use xlinkHref={`${sprite}#icon-download`} />
            </svg>
          </LoadButton>
        </MediaContainer>

        <NavigationButton
          className="prev"
          onClick={handlePrev}
          disabled={index === 0}
        >
          <svg width={30} height={30}>
            <use xlinkHref={`${sprite}#icon-chevron-left`} />
          </svg>
        </NavigationButton>

        <NavigationButton
          className="next"
          onClick={handleNext}
          disabled={index === mediaItems.length - 1}
        >
          <svg width={30} height={30}>
            <use xlinkHref={`${sprite}#icon-chevron-right`} />
          </svg>
        </NavigationButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
