import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_BASE_URL = "https://instagram-scraper-api2.p.rapidapi.com";
const API_KEY = "7ad1f570e1msha811d9d6db256dap1ec7b0jsn6c9028573957";

export const loadStories = createAsyncThunk(
  "stories/loadStories",
  async (searchQuery, { rejectWithValue }) => {
    console.log("Start Stories API call with query:", searchQuery);

    try {
      const response = await axios.get(`${API_BASE_URL}/v1/stories`, {
        params: { username_or_id_or_url: searchQuery },
        headers: {
          "X-RapidAPI-Key": API_KEY,
          "X-RapidAPI-Host": "instagram-scraper-api2.p.rapidapi.com",
        },
      });

      console.log("Stories Response:", response.data);

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
