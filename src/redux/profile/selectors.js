export const selectUser = (state) => state.profile.user || null;
export const selectIsLoading = (state) => state.profile?.isLoading || false;
export const selectError = (state) => state.profile?.error || null; 
