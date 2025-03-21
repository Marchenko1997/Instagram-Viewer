import { configureStore } from "@reduxjs/toolkit";
import { highlightsApi } from "./highlightsInfo/operations";
import profileSlice from "./profile/slice";
import storiesReducer from "./stories/slice";
import postsReducer from "./posts/slice";
import highlightsReducer from "./highlights/slice";
import reelsReducer from "./reels/slice";

const store = configureStore({
  reducer: {
    profile: profileSlice,
    stories: storiesReducer,
    posts: postsReducer,
    highlights: highlightsReducer,
    reels: reelsReducer,
    [highlightsApi.reducerPath]: highlightsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      highlightsApi.middleware
    ),
});

export default store;
