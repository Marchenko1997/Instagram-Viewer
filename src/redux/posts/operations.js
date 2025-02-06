import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (username, { rejectWithValue }) => {
    const API_URL = "https://instagram-scraper-api2.p.rapidapi.com/v1/posts";

    const API_KEY = "7ad1f570e1msha811d9d6db256dap1ec7b0jsn6c9028573957";

    try {
      const response = await axios.get(API_URL, {
        params: { username_or_id_or_url: username },
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
        },
      });

      return response.data;
    } catch (error) {
      console.error(
        "Error fetching posts:",
        error.response?.data || error.message
      );
      return rejectWithValue(error.response?.data || "Failed to fetch posts");
    }
  }
);
