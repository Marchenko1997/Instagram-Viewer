import {
  PostCardContainer,
  PostImage,
  PostVideo,
  PostMeta,
  InfoContainer,
  TagsContainer,
  TagsButton,
} from "./PostCard.styled";
import { formatDistanceToNow } from "date-fns";
import { formatNumber } from "../../../../utils/formatNumber";
import DownloadBtn from "../../../Common/DownloadBtn/DownloadBtn";
import sprite from "../../../../../public/images/sprite.svg";
import Modal from "../../../Common/Modal/Modal";
import { useState } from "react";
import { getMediaItems } from "../../../../utils/getMediaItems";
import { useSelector } from "react-redux";
import { selectPosts } from "../../../../redux/posts/selectors";

const proxyUrl = import.meta.env.VITE_PROXY_URL;


const PostCard = ({ post }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const posts = useSelector(selectPosts);
    const mediaItems = getMediaItems(posts);

  if (!post) {
    console.error("Post data is missing");
    return null;
  }

  const isVideo = post.media_type === 2;
  const mediaUrl =
    post.video_url ||
    post.image_versions2?.candidates?.[0]?.url ||
    post.thumbnail_url;

  if (!mediaUrl) {
    console.error("Invalid media URL for post:", post);
    return null;
  }

  const proxiedMediaUrl = `${proxyUrl}?url=${encodeURIComponent(mediaUrl)}`;

  const publishedDate = post.caption?.created_at
    ? formatDistanceToNow(new Date(post.caption.created_at * 1000), {
        addSuffix: false,
      })
    : "Unknown";

  const likeCount =
    post.like_count !== undefined ? formatNumber(post.like_count) : "0";

  const commentCount =
    post.comment_count !== undefined ? formatNumber(post.comment_count) : "0";

    const postIndex = mediaItems.findIndex(
      (item) => item.url === proxiedMediaUrl
    );

    const handleOpenModal = () => {
      if (postIndex !== -1) {
        setCurrentIndex(postIndex); 
        setIsModalOpen(true);
      }
    };


  return (
    <>
      <PostCardContainer>
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          {isVideo ? (
            <PostVideo src={proxiedMediaUrl} controls />
          ) : (
            <PostImage src={proxiedMediaUrl} alt="Post Media" />
          )}
          <TagsContainer>
            <TagsButton onClick={handleOpenModal}>
              <svg width={30} height={30}>
                <use xlinkHref={`${sprite}#icon-maximize`}></use>
              </svg>
            </TagsButton>
          </TagsContainer>
        </div>

        <InfoContainer>
          <DownloadBtn mediaUrl={proxiedMediaUrl} mediaType={post.media_type} />
          <PostMeta>
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
          </PostMeta>
        </InfoContainer>
      </PostCardContainer>
      {isModalOpen && (
        <Modal
          mediaItems={mediaItems}
          currentIndex={currentIndex}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default PostCard;
