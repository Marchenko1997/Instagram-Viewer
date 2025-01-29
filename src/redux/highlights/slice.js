import { createSlice } from "@reduxjs/toolkit";
import { fetchHighlights } from "./operations";

const highlightsSlice = createSlice({
  name: "highlights",
  initialState: {
    highlights: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHighlights.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchHighlights.fulfilled, (state, action) => {
        state.isLoading = false;
        state.highlights = action.payload;
      })
      .addCase(fetchHighlights.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});


export default highlightsSlice.reducer;
