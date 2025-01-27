import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_BASE_URL = "https://instagram-scraper-api2.p.rapidapi.com";
const API_KEY = "7ad1f570e1msha811d9d6db256dap1ec7b0jsn6c9028573957";

export const loadProfile = createAsyncThunk(
  "profile/loadProfile",
  async (searchQuery, { rejectWithValue }) => {
    console.log("Start API call with query:", searchQuery);

    try {
      const response = await axios.get(`${API_BASE_URL}/v1/info`, {
        params: { username_or_id_or_url: searchQuery },
        headers: {
          "X-RapidAPI-Key": API_KEY,
          "X-RapidAPI-Host": "instagram-scraper-api2.p.rapidapi.com",
        },
      });

     

     
      return response.data.data || null; 
    } catch (error) {
      console.error(
        "Profile API Error:",
        error.response?.data || error.message
      );
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
