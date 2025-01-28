import { createSlice } from "@reduxjs/toolkit";
import { fetchReels } from "./operations";

const reelsSlice = createSlice({
  name: "reels",
  initialState: {
    reels: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReels.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchReels.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reels = action.payload;
      })
      .addCase(fetchReels.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default reelsSlice.reducer;
