import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Используем только базовый URL из env
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const API_HOST = import.meta.env.VITE_API_HOST;

export const fetchHighlights = createAsyncThunk(
  "highlights/fetchHighlights",
  async (username, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/v1/highlights`, {
        params: { username_or_id_or_url: username },
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": API_HOST,
        },
      });

      const items = response.data.data?.items;

      if (!items || !Array.isArray(items) || items.length === 0) {
        throw new Error("API response is missing 'items' or items are empty.");
      }

      return items.map((item) => ({
        id: item.id,
        title: item.title || "Untitled",
        cover_media: item.cover_media?.cropped_image_version?.url || "",
        media_count: item.media_count || 0,
      }));
    } catch (error) {
      console.error("API Error:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
