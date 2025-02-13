import { useEffect, useState } from "react";
import {
  ModalOverlay,
  ModalContent,
  MediaContainer,
  NavigationButton,
} from "./Modal.styled";
import sprite from "../../../images/sprite.svg";
import { disableScroll, enableScroll } from "../../../utils/scrollLock";

const Modal = ({ mediaItems = [], currentIndex = 0, onClose }) => {
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
  }, [onClose, mediaItems.length]); 

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
        </MediaContainer>

        <NavigationButton className="prev" onClick={handlePrev}>
          <svg width={30} height={30}>
            <use xlinkHref={`${sprite}#icon-chevron-left`} />
          </svg>
        </NavigationButton>

        <NavigationButton className="next" onClick={handleNext}>
          <svg width={30} height={30}>
            <use xlinkHref={`${sprite}#icon-chevron-right`} />
          </svg>
        </NavigationButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
