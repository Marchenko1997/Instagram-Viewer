import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const API_HOST = import.meta.env.VITE_API_HOST;

export const fetchReels = createAsyncThunk(
  "reels/fetchReels",
  async (username, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/v1/reels`, {
        params: { username_or_id_or_url: username },
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": API_HOST,
        },
      });

      const items = response.data.data?.items;

      if (!items || !Array.isArray(items)) {
        throw new Error("No reels found or invalid data format.");
      }

      return items.map((item) => ({
        id: item.id,
        caption: item.caption?.text || "",
        likeCount: item.like_count || 0,
        commentCount: item.comment_count || 0,
        videoUrl: item.video_url || "",
        thumbnailUrl: item.thumbnail_url || "",
        createdAt: item.taken_at || item.created_at || "",
      }));
    } catch (error) {
      console.error("Error fetching reels:", error.message);
      return rejectWithValue(error.message || "An error occurred");
    }
  }
);
