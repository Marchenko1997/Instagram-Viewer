import {
  StoryCard,
  StoryImage,
  StoryVideo,
  LoadContainer,
  TagsContainer,
  TagsButton,
} from "./StoryItem.styled";
import DownloadBtn from "../../../Common/DownloadBtn/DownloadBtn";
import { formatDistanceToNowStrict } from "date-fns";
import sprite from "../../../../../public/images/sprite.svg";
import { useSelector } from "react-redux";
import { selectStories } from "../../../../redux/stories/selectors";
import { getStoryMediaItems } from "../../../../utils/getStoryItems";
import Modal from "../../../Common/Modal/Modal";
import { useState } from "react";

const proxyUrl = import.meta.env.VITE_PROXY_URL;


const StoryItem = ({ title, image, video, takenAt }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const stories = useSelector(selectStories); 
  const mediaItems = getStoryMediaItems(stories); 

  const isVideo = video && video.trim();

  const mediaUrl = isVideo
    ? `${proxyUrl}?url=${encodeURIComponent(video)}`
    : `${proxyUrl}?url=${encodeURIComponent(image)}`;

  const publishedDate = takenAt
    ? formatDistanceToNowStrict(new Date(takenAt * 1000), { addSuffix: true })
    : "Unknown";
  
   const handleOpenModal = () => {
     const index = mediaItems.findIndex((item) => item.url === mediaUrl);
     if (index !== -1) {
       setCurrentIndex(index);
       setIsModalOpen(true);
     }
   };

  return (
    <>
      <StoryCard>
        {video && video.trim() ? (
          <StoryVideo controls>
            <source src={video} type="video/mp4" />
            Your browser does not support video.
          </StoryVideo>
        ) : (
          <StoryImage src={image} alt={title} />
        )}
        <TagsContainer>
          <TagsButton onClick={handleOpenModal}>
            <svg width={30} height={30}>
              <use xlinkHref={`${sprite}#icon-maximize`}></use>
            </svg>
          </TagsButton>
        </TagsContainer>
        <LoadContainer>
          <DownloadBtn mediaUrl={mediaUrl} mediaType={isVideo ? 2 : 1} />
          <span>
            <svg width={18} height={18}>
              <use xlinkHref={`${sprite}#icon-clock`}></use>
            </svg>
            {publishedDate}
          </span>
        </LoadContainer>
      </StoryCard>
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

export default StoryItem;
