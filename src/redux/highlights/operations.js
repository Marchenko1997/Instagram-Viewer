import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://instagram-scraper-api2.p.rapidapi.com/v1/highlights";
const API_KEY = "7ad1f570e1msha811d9d6db256dap1ec7b0jsn6c9028573957";
const API_HOST = "instagram-scraper-api2.p.rapidapi.com";

export const fetchHighlights = createAsyncThunk(
  "highlights/fetchHighlights",
  async (username, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL, {
        params: { username_or_id_or_url: username },
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": API_HOST,
        },
      });
      return response.data.items;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
