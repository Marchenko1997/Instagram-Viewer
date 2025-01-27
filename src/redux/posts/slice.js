import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./operations";

const initialState = {
  user: null,
  posts: [],
  paginationToken: null,
  isLoading: false,
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        const { data } = action.payload; 
        state.isLoading = false;
        state.user = data.user; 
        state.posts = data.items; 
        state.paginationToken = action.payload.pagination_token;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to fetch posts";
      });
  },
});

export default postsSlice.reducer;
