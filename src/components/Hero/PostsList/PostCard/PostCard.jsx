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
import sprite from "../../../../images/sprite.svg";
import Modal from "../../../Common/Modal/Modal";
import { useState } from "react";

const proxyUrl = "http://localhost:3001/proxy";

const PostCard = ({ post }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

const mediaItems = post.carousel_media
  ? post.carousel_media.map((item) => ({
      type: item.media_type === 2 ? "video" : "image",
      url: `${proxyUrl}?url=${encodeURIComponent(
        item.video_url ||
          item.image_versions2?.candidates?.[0]?.url ||
          item.thumbnail_url
      )}`,
    }))
  : [
      {
        type: isVideo ? "video" : "image",
        url: proxiedMediaUrl,
      },
    ];


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
            <TagsButton onClick={() => setIsModalOpen(true)}>
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
          currentIndex={0}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default PostCard;
