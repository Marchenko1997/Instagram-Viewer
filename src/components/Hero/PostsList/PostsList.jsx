import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  selectPosts,
  selectIsLoading,
  selectError,
} from "../../../redux/posts/selectors";
import PostCard from "./PostCard/PostCard";
import { PostsContainer } from "./PostsList.styled";
import Loader from "../../Common/Loader/Loader";
import Pagination from "../../Common/Pagination/Pagination";

const POST_PER_PAGE = 12

const PostsList = () => {
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (error) {
      toast.error(`Error loading posts: ${error}`);
    }
  }, [error]);

  useEffect(() => {
    if (!posts || posts.length === 0) {
      toast.info("No posts available.");
    }
  }, [posts]);

  if (isLoading) {
    return <Loader />;
  }

  const flattenedPosts = posts.flatMap((post) => {
    if (post?.media_type === 8 && post?.carousel_media?.length) {
      return post.carousel_media.map((media, index) => ({
        ...post,
        id: `${post.id}_carousel_${index}`,
        ...media,
      }));
    }
    return post;
  });

  const validPosts = flattenedPosts.filter((post) => {
    const mediaUrl =
      post.media_type === 2
        ? post.video_url
        : post.image_versions2?.candidates?.[0]?.url || post.thumbnail_url;
    return !!mediaUrl;
  });

  const totalPages = Math.ceil(validPosts.length / POST_PER_PAGE);
  const startIndex = (currentPage - 1) * POST_PER_PAGE;
  const currentPosts = validPosts.slice(startIndex, startIndex + POST_PER_PAGE);

  return (
    <>
      <PostsContainer>
        {currentPosts.map((post, index) => (
          <PostCard key={post.id || index} post={post} />
        ))}
      </PostsContainer>

      {/* ✅ Добавляем пагинацию */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </>
  );
};


export default PostsList;
