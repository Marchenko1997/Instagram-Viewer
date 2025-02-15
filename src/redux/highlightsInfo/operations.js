import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = "7ad1f570e1msha811d9d6db256dap1ec7b0jsn6c9028573957";
const API_HOST = "instagram-scraper-api2.p.rapidapi.com";
const API_URL = "https://instagram-scraper-api2.p.rapidapi.com/v1";

export const highlightsApi = createApi({
  reducerPath: "highlightsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-key", API_KEY);
      headers.set("x-rapidapi-host", API_HOST);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getHighlightMedia: builder.query({
      query: (highlightId) => ({
        url: "/highlight_info",
        params: { highlight_id: highlightId.replace("highlight:", "") },
      }),
      transformResponse: (response) => {
        const items = response.data?.items || [];
        return items.map((item) => {
          const isVideo = item.media_type === 2;
          const isImage = item.media_type === 1;

          const imageUrl =
            isImage && item.image_versions?.items?.length
              ? item.image_versions.items.find((img) => img.url)?.url
              : item.image_versions2?.items?.length
              ? item.image_versions2.items.find((img) => img.url)?.url
              : response.data.data.additional_data?.cover_media
                  ?.cropped_image_version?.url || null;

          const videoUrl = isVideo
            ? item.video_versions?.find((v) => v.url)?.url || item.video_url
            : null;

          return {
            id: item.id,
            media_type: item.media_type,
            media_url: imageUrl,
            video_url: videoUrl,
            taken_at: item.taken_at,
          };
        });
      },
      providesTags: (result, error, highlightId) => [
        { type: "Highlight", id: highlightId },
      ],
    }),
  }),
});

export const { useGetHighlightMediaQuery } = highlightsApi;
