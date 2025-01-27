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

      console.log("Full API Response:", response.data); 

      const items = response.data.data?.items;
      console.log("Items:", items); 

  
      if (!items || !Array.isArray(items) || items.length === 0) {
        throw new Error("API response is missing 'items' or items are empty.");
      }

     
      return items.map((item) => ({
        id: item.id,
        title: item.title || "Untitled",
        cover_media: item.cover_media?.cropped_image_version?.url || "",
      }));
    } catch (error) {
      console.error("API Error:", error.response?.data || error.message); 
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);