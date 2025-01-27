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
        console.log("Fetching highlights...");
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchHighlights.fulfilled, (state, action) => {
        console.log("Highlights fetched successfully:", action.payload);
        state.isLoading = false;
        state.highlights = action.payload;
      })
      .addCase(fetchHighlights.rejected, (state, action) => {
        console.log("Failed to fetch highlights:", action.payload);
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});


export default highlightsSlice.reducer;
