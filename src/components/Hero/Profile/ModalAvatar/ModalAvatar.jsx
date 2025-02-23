import {
  ModalOverlay,
  ModalContent,
  ModalAvatarImage,
  LoadButton,
} from "./ModalAvatar.styled";
import { useEffect } from "react";
import sprite from "../../../../../public/images/sprite.svg";
import { enableScroll, disableScroll } from "../../../../utils/scrollLock";

const ModalAvatar = ({ avatarUrl, onClose }) => {
  useEffect(() => {
    disableScroll();
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      enableScroll();
    };
  }, [onClose]);

  const handleDownload = () => {
    if (avatarUrl) {
      const link = document.createElement("a");
      link.href = avatarUrl;
      link.download = "downloaded-image.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalAvatarImage src={avatarUrl} alt="Profile Avatar" />
        <LoadButton aria-label="Download avatar" onClick={handleDownload}>
          <svg width={24} height={24}>
            <use xlinkHref={`${sprite}#icon-download`} />
          </svg>
        </LoadButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalAvatar;
