const proxyUrl = "http://localhost:3001/proxy";

export const getHighlightMediaItems = (highlights) => {
  console.log("🟢 Highlights Input:", highlights); // Проверяем входящие данные

  if (!highlights || !Array.isArray(highlights)) {
    console.log("❌ Highlights are invalid or not an array!");
    return [];
  }

  const processedItems = highlights.flatMap((highlight) => {
    console.log("🔹 Processing Highlight:", highlight); // Лог каждого элемента

    const mediaType = highlight.media_type === 2 ? "video" : "image";
    const mediaUrl = highlight.video_url || highlight.media_url;
    const fullUrl = `${proxyUrl}?url=${encodeURIComponent(mediaUrl)}`;

    console.log("➡️ Processed Media Item:", {
      type: mediaType,
      url: fullUrl,
    });

    return [
      {
        type: mediaType,
        url: fullUrl,
      },
    ];
  });

  console.log("✅ Final Processed Media Items:", processedItems);
  return processedItems;
};
