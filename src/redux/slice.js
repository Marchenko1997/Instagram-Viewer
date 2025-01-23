import { createSlice } from "@reduxjs/toolkit";
import { loadStories } from "./operations";

const initialState = {
  profile: "",
  stories: [],
  isLoading: false,
  error: null,
};

const storySlice = createSlice({
  name: "stories",
  initialState,
  reducers: {
    setProfile(state, action) {
      state.profile = action.payload;
    },
  },
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

export const { setProfile } = storySlice.actions;

export default storySlice.reducer;
