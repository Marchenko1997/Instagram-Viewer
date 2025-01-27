import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "./profile/slice";
import storiesReducer from "./stories/slice";
import postsReducer from "./posts/slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 

const profilePersistConfig = {
  key: "profile",
  storage,
};

const storiesPersistConfig = {
  key: "stories",
  storage,
};

const postsPersistConfig = {
  key: "posts",
  storage,
};

const persistedProfileReducer = persistReducer(
  profilePersistConfig,
  profileSlice
);
const persistedStoriesReducer = persistReducer(
  storiesPersistConfig,
  storiesReducer
);

const persistedPostsReducer = persistReducer(postsPersistConfig, postsReducer);

const store = configureStore({
  reducer: {
    profile: persistedProfileReducer,
    stories: persistedStoriesReducer,
    posts: persistedPostsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;
