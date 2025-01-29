import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL_HIGHLIGHT_INFO =
  "https://instagram-scraper-api2.p.rapidapi.com/v1/highlight_info";
const API_KEY = "7ad1f570e1msha811d9d6db256dap1ec7b0jsn6c9028573957";
const API_HOST = "instagram-scraper-api2.p.rapidapi.com";

// Получаем медиафайлы для конкретного Highlight по ID
export const fetchHighlightMedia = createAsyncThunk(
  "highlightMedia/fetchHighlightMedia",
  async (highlightId, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL_HIGHLIGHT_INFO, {
        params: { highlight_id: highlightId },
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": API_HOST,
        },
      });

      console.log(`Media for Highlight ${highlightId}:`, response.data);

      const items = response.data.data?.items;
      if (!items || !Array.isArray(items) || items.length === 0) {
        throw new Error("API response is missing 'items' or items are empty.");
      }

      return {
        highlightId,
        media: items.map((item) => ({
          id: item.id,
          media_type: item.media_type, // 1 - Image, 2 - Video
          media_url:
            item.media_type === 1 ? item.image_versions.items[0].url : null,
          video_url: item.media_type === 2 ? item.video_versions[0].url : null,
        })),
      };
    } catch (error) {
      console.error("API Error:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
