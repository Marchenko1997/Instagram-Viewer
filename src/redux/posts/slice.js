import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./operations";

const initialState = {
  posts: [],
  paginationToken: null,
  isLoading: false,
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    clearPosts: (state) => {
      state.posts = []; // ✅ Очищаем посты перед новым поиском
      state.paginationToken = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        const { posts, paginationToken } = action.payload;
        state.isLoading = false;

        // ✅ Проверяем, есть ли дубликаты, и добавляем только новые посты
        const newPosts = posts.filter(
          (post) =>
            !state.posts.some((existingPost) => existingPost.id === post.id)
        );

        state.posts = [...state.posts, ...newPosts];
        state.paginationToken = paginationToken;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Ошибка загрузки постов";
      });
  },
});

export const { clearPosts } = postsSlice.actions;
export default postsSlice.reducer;
