import { createSlice } from "@reduxjs/toolkit";
import { loadStories } from "./operations";

const initialState = {
  stories: [],
  isLoading: false,
  error: null,
};

const storiesSlice = createSlice({
  name: "stories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadStories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loadStories.fulfilled, (state, action) => {
        state.isLoading = false;
         state.stories = action.payload;
      })
      .addCase(loadStories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default storiesSlice.reducer;
