const proxyUrl = "http://localhost:3001/proxy";

export const getMediaItems = (post) => {
  if (!post) return [];

  return post.carousel_media
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
          type: post.media_type === 2 ? "video" : "image",
          url: `${proxyUrl}?url=${encodeURIComponent(
            post.video_url ||
              post.image_versions2?.candidates?.[0]?.url ||
              post.thumbnail_url
          )}`,
        },
      ];
};
