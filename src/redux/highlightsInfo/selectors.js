export const selectHighlightMedia = (highlightId) => (state) =>
  state.highlightMedia.media[highlightId] || [];
export const selectIsLoadingMedia = (state) => state.highlightMedia.isLoading;
export const selectMediaError = (state) => state.highlightMedia.error;
