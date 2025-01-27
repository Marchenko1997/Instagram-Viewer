import { PostCardContainer, PostImage, PostVideo } from "./PostCard.styled";

const PostCard = ({ post }) => {
  const isVideo = post?.media_type === 2 || post?.media_type === 8;
  const mediaUrl =
    post?.thumbnail_url || post?.image_versions?.items?.[0]?.url || "";

  return (
    <PostCardContainer>
      {isVideo ? (
        <PostVideo src={post?.video_url || mediaUrl} controls />
      ) : (
        <PostImage src={mediaUrl} alt={post?.caption || "Post Image"} />
      )}
    </PostCardContainer>
  );
};

export default PostCard;
