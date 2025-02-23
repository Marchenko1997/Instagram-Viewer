import {
  ReelsCardContainer,
  ReelsVideo,
  ReelsCaption,
  ReelsMeta,
  TagsContainer,
  TagsButton,
} from "./ReelsCard.styled";
import DownloadBtn from "../../../Common/DownloadBtn/DownloadBtn";
import { formatDistanceToNow } from "date-fns";
import sprite from "../../../../../public/images/sprite.svg";
import Modal from "../../../Common/Modal/Modal";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getReelsMediaItems } from "../../../../utils/getReels";
import { selectReels } from "../../../../redux/reels/selectors";

const proxyUrl = "http://localhost:3001/proxy";

const ReelsCard = ({ videoUrl, likeCount, createdAt, commentCount }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
    const reels = useSelector(selectReels);
    const mediaItems = getReelsMediaItems(reels);
  
  if (!videoUrl) {
    console.error("Invalid video URL for reel");
    return null;
  }

  const proxiedVideoUrl = `${proxyUrl}?url=${encodeURIComponent(videoUrl)}`;

  console.log("ReelsCard Props:", {
    videoUrl,
    likeCount,
    createdAt,
    commentCount,
  });

  const publishedDate = createdAt
    ? formatDistanceToNow(new Date(createdAt * 1000), { addSuffix: false })
    : "Unknown";
  
    const handleOpenModal = () => {
      const index = mediaItems.findIndex(
        (item) => item.url === proxiedVideoUrl
      );
      setCurrentIndex(index !== -1 ? index : 0);
      setIsModalOpen(true);
    };

  return (
    <>
      <ReelsCardContainer>
        <ReelsVideo src={proxiedVideoUrl} controls />
        <TagsContainer>
          <TagsButton onClick={handleOpenModal}>
            <svg width={30} height={30}>
              <use xlinkHref={`${sprite}#icon-maximize`}></use>
            </svg>
          </TagsButton>
        </TagsContainer>
        <ReelsCaption>
          <DownloadBtn mediaUrl={proxiedVideoUrl} mediaType={2} />
          <ReelsMeta>
            <p>
              <svg width={18} height={18}>
                <use xlinkHref={`${sprite}#icon-heart`}></use>
              </svg>
              {likeCount}
            </p>
            <p>
              <svg width={18} height={18}>
                <use xlinkHref={`${sprite}#icon-message-circle`}></use>
              </svg>
              {commentCount}
            </p>
            <span>
              <svg width={18} height={18}>
                <use xlinkHref={`${sprite}#icon-clock`}></use>
              </svg>
              {publishedDate}
            </span>
          </ReelsMeta>
        </ReelsCaption>
      </ReelsCardContainer>
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

export default ReelsCard;
