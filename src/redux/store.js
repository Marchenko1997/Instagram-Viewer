import { configureStore } from "@reduxjs/toolkit";
import storyReducer from "./slice";

const store = configureStore({
  reducer: {
    stories: storyReducer,
  },
});

export default store;
