const proxyUrl = import.meta.env.VITE_PROXY_URL;

export const getReelsMediaItems = (reels) => {
  if (!reels || !Array.isArray(reels)) return [];

  return reels.map((reel) => ({
    type: "video",
    url: `${proxyUrl}?url=${encodeURIComponent(reel.videoUrl)}`,
  }));
};
