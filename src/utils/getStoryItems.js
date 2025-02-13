const proxyUrl = "http://localhost:3001/proxy";

export const getStoryMediaItems = (stories) => {
  if (!stories || !Array.isArray(stories)) return [];

  return stories.map((story) => ({
    type: story.video_url ? "video" : "image",
    url: `${proxyUrl}?url=${encodeURIComponent(
      story.video_url ||
        story.image_versions2?.candidates?.[0]?.url ||
        story.thumbnail_url
    )}`,
  }));
};
