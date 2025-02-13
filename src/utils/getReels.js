const proxyUrl = "http://localhost:3001/proxy";

export const getReelsMediaItems = (reels) => {
  if (!reels || !Array.isArray(reels)) return [];

  return reels.map((reel) => ({
    type: "video",
    url: `${proxyUrl}?url=${encodeURIComponent(reel.videoUrl)}`,
  }));
};
