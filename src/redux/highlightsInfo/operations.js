import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL_HIGHLIGHT_INFO =
  "https://instagram-scraper-api2.p.rapidapi.com/v1/highlight_info";
const API_KEY = "7ad1f570e1msha811d9d6db256dap1ec7b0jsn6c9028573957";
const API_HOST = "instagram-scraper-api2.p.rapidapi.com";


export const fetchHighlightMedia = createAsyncThunk(
  "highlightMedia/fetchHighlightMedia",
  async (highlightId, { rejectWithValue }) => {
    try {
      const cleanedHighlightId = highlightId.replace("highlight:", "");

      const response = await axios.get(API_URL_HIGHLIGHT_INFO, {
        params: { highlight_id: cleanedHighlightId },
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": API_HOST,
        },
      });

      console.log(`Media for Highlight ${cleanedHighlightId}:`, response.data);

      const items = response.data.data?.items;
      if (!items || !Array.isArray(items) || items.length === 0) {
        throw new Error("API response is missing 'items' or items are empty.");
      }

      return {
        highlightId: cleanedHighlightId,
        media: items.map((item) => {
          console.log("Processing item:", item);

          const isVideo = item.media_type === 2;
          const isImage = item.media_type === 1;

          // Проверяем несколько возможных источников изображения
          const imageUrl =
            isImage && item.image_versions?.items?.length
              ? item.image_versions.items.find((img) => img.url)?.url
              : item.image_versions2?.items?.length
              ? item.image_versions2.items.find((img) => img.url)?.url
              : response.data.data.additional_data?.cover_media
                  ?.cropped_image_version?.url || null;
          console.log(`Extracted Image URL: ${imageUrl}`);

          const videoUrl = isVideo
            ? item.video_versions?.find((v) => v.url)?.url || item.video_url
            : null;

          console.log(`Extracted Video URL: ${videoUrl}`);

          return {
            id: item.id,
            media_type: item.media_type,
            media_url: imageUrl,
            video_url: videoUrl,
          };
        }),
      };
    } catch (error) {
      console.error("API Error:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
