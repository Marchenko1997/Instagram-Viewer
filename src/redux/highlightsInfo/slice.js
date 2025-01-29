import { createSlice } from "@reduxjs/toolkit";
import { fetchHighlightMedia } from "./operations";

const highlightMediaSlice = createSlice({
  name: "highlightMedia",
  initialState: {
    media: {}, // Хранит медиафайлы по highlightId
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHighlightMedia.pending, (state) => {
        console.log("Fetching highlight media...");
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchHighlightMedia.fulfilled, (state, action) => {
        console.log(
          "✅ State before update:",
          JSON.parse(JSON.stringify(state.media))
        );
        console.log("✅ New media received:", action.payload);
        state.isLoading = false;
        state.media[action.payload.highlightId] = action.payload.media;
      })
      .addCase(fetchHighlightMedia.rejected, (state, action) => {
        console.log("Failed to fetch highlight media:", action.payload);
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default highlightMediaSlice.reducer;
