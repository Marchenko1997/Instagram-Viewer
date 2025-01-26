import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "./profile/slice";
import storiesReducer from "./stories/slice";
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

const persistedProfileReducer = persistReducer(
  profilePersistConfig,
  profileSlice
);
const persistedStoriesReducer = persistReducer(
  storiesPersistConfig,
  storiesReducer
);

const store = configureStore({
  reducer: {
    profile: persistedProfileReducer,
    stories: persistedStoriesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Отключает предупреждения о сериализации
    }),
});

export const persistor = persistStore(store);
export default store;
