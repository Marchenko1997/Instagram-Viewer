import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const API_HOST = import.meta.env.VITE_API_HOST;

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async ({ username, paginationToken = null }, { rejectWithValue }) => {
    if (!username) {
      console.error("❌ Ошибка: username не передан!");
      return rejectWithValue("Ошибка: username не передан!");
    }

    try {
      const params = { username_or_id_or_url: username };
      if (paginationToken) {
        params.pagination_token = paginationToken;
      }

      const response = await axios.get(`${API_BASE_URL}/v1/posts`, {
        params,
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": API_HOST,
        },
      });

      return {
        posts: response.data.data.items || [],
        paginationToken: response.data.pagination_token || null,
      };
    } catch (error) {
      console.error(
        "❌ Ошибка загрузки постов:",
        error.response?.data || error.message
      );
      return rejectWithValue(error.response?.data || "Ошибка загрузки постов");
    }
  }
);
