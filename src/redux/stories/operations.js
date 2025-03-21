import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const API_HOST = import.meta.env.VITE_API_HOST;

export const loadStories = createAsyncThunk(
  "stories/loadStories",
  async (searchQuery, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/v1/stories`, {
        params: { username_or_id_or_url: searchQuery },
        headers: {
          "X-RapidAPI-Key": API_KEY,
          "X-RapidAPI-Host": API_HOST,
        },
      });

      return response.data.data?.items || [];
    } catch (error) {
      console.error(
        "Stories API Error:",
        error.response?.data || error.message
      );
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
