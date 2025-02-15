import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { highlightsApi } from "./highlightsInfo/operations";
import profileSlice from "./profile/slice";
import storiesReducer from "./stories/slice";
import postsReducer from "./posts/slice";
import highlightsReducer from "./highlights/slice";
import reelsReducer from "./reels/slice";

const profilePersistConfig = { key: "profile", storage };
const storiesPersistConfig = { key: "stories", storage };
const postsPersistConfig = { key: "posts", storage };
const highlightsPersistConfig = { key: "highlights", storage };
const reelsPersistConfig = { key: "reels", storage };

const store = configureStore({
  reducer: {
    profile: persistReducer(profilePersistConfig, profileSlice),
    stories: persistReducer(storiesPersistConfig, storiesReducer),
    posts: persistReducer(postsPersistConfig, postsReducer),
    highlights: persistReducer(highlightsPersistConfig, highlightsReducer),
    reels: persistReducer(reelsPersistConfig, reelsReducer),
    [highlightsApi.reducerPath]: highlightsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      highlightsApi.middleware
    ),
});

export const persistor = persistStore(store);
export default store;
