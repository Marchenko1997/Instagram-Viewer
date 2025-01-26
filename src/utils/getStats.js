export const getStats = (profileData) => [
  { name: "posts", value: profileData.media_count || "0" },
  { name: "followers", value: profileData.follower_count || "0" },
  { name: "following", value: profileData.following_count || "0" },
];
