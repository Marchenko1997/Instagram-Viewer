export const selectHighlightMedia = (highlightId) => (state) => {
  if (!highlightId) return [];
  const cleanedId = highlightId.replace("highlight:", "");
  return state.highlightMedia.media[cleanedId] || [];
};
export const selectIsLoadingMedia = (state) => state.highlightMedia.isLoading;
export const selectMediaError = (state) => state.highlightMedia.error;
