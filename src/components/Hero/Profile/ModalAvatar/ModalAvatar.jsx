import {
  ModalOverlay,
  ModalContent,
  ModalAvatarImage,
  LoadButton,
} from "./ModalAvatar.styled";
import { useEffect } from "react";
import sprite from "../../../../../public/images/sprite.svg";
import { enableScroll, disableScroll } from "../../../../utils/scrollLock";
import LoaderPostCard from "../../../Common/LoaderPostCard/LoaderPostCard";
import { useState } from "react";

const ModalAvatar = ({ avatarUrl, onClose }) => {
  const [isLoading, setIsLoading] = useState(true)
  

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
        {isLoading && <LoaderPostCard />}
        <ModalAvatarImage
          src={avatarUrl}
          alt="Profile Avatar"
          onLoad={() => setIsLoading(false)}
        />
        {!isLoading && (
          <LoadButton aria-label="Download avatar" onClick={handleDownload}>
            <svg width={24} height={24}>
              <use xlinkHref={`${sprite}#icon-download`} />
            </svg>
          </LoadButton>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalAvatar;
