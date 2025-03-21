const proxyUrl = import.meta.env.VITE_PROXY_URL;

export const getHighlightMediaItems = (items) => {
  console.log("🟢 Items Input:", items);

  if (!Array.isArray(items) || items.length === 0) {
    console.log("❌ Items are invalid or empty!");
    return [];
  }

  return items
    .map((item) => {
      console.log("🔹 Processing Item:", item);

      const mediaType = item.media_type === 2 ? "video" : "image";
      const mediaUrl = item.video_url || item.media_url;

      if (!mediaUrl) {
        console.log("❌ No valid media URL found!");
        return null; // Возвращаем null, но позже отфильтруем их
      }

      const fullUrl = `${proxyUrl}?url=${encodeURIComponent(mediaUrl)}`;

      console.log("➡️ Processed Media Item:", {
        type: mediaType,
        url: fullUrl,
      });

      return { type: mediaType, url: fullUrl };
    })
    .filter(Boolean); // Убираем null значения
};
