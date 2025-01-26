export const selectStories = (state) => state.stories.stories || [];
export const selectIsLoading = (state) => state.stories.isLoading;
export const selectError = (state) => state.stories.error;
