import {
  PostCardContainer,
  PostImage,
  PostVideo,
  PostMeta,
  InfoContainer
} from "./PostCard.styled";
import { formatDistanceToNow } from "date-fns";
import { formatNumber } from "../../../../utils/formatNumber";
import DownloadBtn from "../../../Common/DownloadBtn/DownloadBtn";

const proxyUrl = "http://localhost:3001/proxy";

const PostCard = ({ post }) => {
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
       addSuffix: true,
     })
   : "Unknown";

  const likeCount =
    post.like_count !== undefined ? formatNumber(post.like_count) : "0";
  

  const commentCount =
    post.comment_count !== undefined ? formatNumber(post.comment_count) : "0";

  
  

  return (
    <PostCardContainer>
      {isVideo ? (
        <PostVideo src={proxiedMediaUrl} controls />
      ) : (
        <PostImage src={proxiedMediaUrl} alt="Post Media" />
      )}
      <InfoContainer>
        <DownloadBtn mediaUrl={proxiedMediaUrl} />
        <PostMeta>
          <p>{likeCount}</p>
          <p>{commentCount}</p>
          <span>{publishedDate}</span>
        </PostMeta>
      </InfoContainer>
    </PostCardContainer>
  );
};

export default PostCard;
