const proxyUrl = import.meta.env.VITE_PROXY_URL;

export const getMediaItems = (posts) => {
  if (!posts || !Array.isArray(posts)) return [];

  return posts.flatMap((post) => {
    if (post.carousel_media) {
      return post.carousel_media.map((item) => ({
        type: item.media_type === 2 ? "video" : "image",
        url: `${proxyUrl}?url=${encodeURIComponent(
          item.video_url ||
            item.image_versions2?.candidates?.[0]?.url ||
            item.thumbnail_url
        )}`,
      }));
    } else {
      return [
        {
          type: post.media_type === 2 ? "video" : "image",
          url: `${proxyUrl}?url=${encodeURIComponent(
            post.video_url ||
              post.image_versions2?.candidates?.[0]?.url ||
              post.thumbnail_url
          )}`,
        },
      ];
    }
  });
};
