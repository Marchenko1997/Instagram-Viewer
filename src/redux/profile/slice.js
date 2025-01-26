import { createSlice } from "@reduxjs/toolkit";
import { loadProfile } from "./operations";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loadProfile.fulfilled, (state, action) => {
        state.isLoading = false;
          state.user = action.payload; 
      })
      .addCase(loadProfile.rejected, (state, action) => {
        state.isLoading = false;
         state.error = action.payload;
      });
  },
});

export default profileSlice.reducer;
