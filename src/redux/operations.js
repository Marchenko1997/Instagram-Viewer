import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const API_BASE_URL = "https://instagram-viewer.p.rapidapi.com";
const API_KEY = "7ad1f570e1msha811d9d6db256dap1ec7b0jsn6c9028573957";

// Асинхронная операция для получения историй
export const loadStories = createAsyncThunk(
  "stories/loadStories",
  async (profile, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/instagram-viewer`, {
        params: { profile },
        headers: {
          "X-RapidAPI-Key": API_KEY,
          "X-RapidAPI-Host": "instagram-viewer.p.rapidapi.com",
        },
      });
      return response.data.stories;
    } catch (error) {
      toast.error("Ошибка загрузки историй!");
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
