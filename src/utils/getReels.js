const proxyUrl = "https://proxy-server-1-6sj7.onrender.com/proxy";

export const getReelsMediaItems = (reels) => {
  if (!reels || !Array.isArray(reels)) return [];

  return reels.map((reel) => ({
    type: "video",
    url: `${proxyUrl}?url=${encodeURIComponent(reel.videoUrl)}`,
  }));
};
