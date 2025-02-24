import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://instagram-scraper-api2.p.rapidapi.com/v1/posts";
const API_KEY = "7ad1f570e1msha811d9d6db256dap1ec7b0jsn6c9028573957";

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

      console.log("📤 Отправка запроса с параметрами:", params);

      const response = await axios.get(API_URL, {
        params,
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
        },
      });

      console.log("✅ Успешный ответ API:", response.data);
      console.log(
        "📌 Получен новый pagination_token:",
        response.data.pagination_token
      );

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
