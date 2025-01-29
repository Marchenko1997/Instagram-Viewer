import { PostCardContainer, PostImage, PostVideo } from "./PostCard.styled";

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

  return (
    <PostCardContainer>
      {isVideo ? (
        <PostVideo src={proxiedMediaUrl} controls />
      ) : (
        <PostImage src={proxiedMediaUrl} alt="Post Media" />
      )}
    </PostCardContainer>
  );
};

export default PostCard;
