import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://instagram-scraper-api2.p.rapidapi.com/v1/reels";
const API_KEY = "7ad1f570e1msha811d9d6db256dap1ec7b0jsn6c9028573957";
const API_HOST = "instagram-scraper-api2.p.rapidapi.com";

export const fetchReels = createAsyncThunk(
  "reels/fetchReels",
  async (username, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL, {
        params: { username_or_id_or_url: username },
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": API_HOST,
        },
      });

      // Обработка данных из API
      const items = response.data.data?.items;
      if (!items || !Array.isArray(items)) {
        throw new Error("No reels found or invalid data format.");
      }

      return items.map((item) => ({
        id: item.id,
        caption: item.caption?.text || "",
        likeCount: item.like_count || 0,
        videoUrl: item.video_url || "",
        thumbnailUrl: item.thumbnail_url || "",
        createdAt: item.created_at || "",
      }));
    } catch (error) {
      console.error("Error fetching reels:", error.message);
      return rejectWithValue(error.message || "An error occurred");
    }
  }
);
