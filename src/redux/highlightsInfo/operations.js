import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const API_HOST = import.meta.env.VITE_API_HOST;

export const highlightsApi = createApi({
  reducerPath: "highlightsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-key", API_KEY);
      headers.set("x-rapidapi-host", API_HOST);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getHighlightMedia: builder.query({
      query: (highlightId) => ({
        url: "/v1/highlight_info", // исправлен путь
        params: { highlight_id: highlightId.replace("highlight:", "") },
      }),
      transformResponse: (response) => {
        const additionalData = response.data?.additional_data;
        const items = response.data?.items || [];
        return items.map((item) => {
          const isVideo = item.media_type === 2;
          const isImage = item.media_type === 1;

          const imageUrl =
            isImage && item.image_versions?.items?.length
              ? item.image_versions.items.find((img) => img.url)?.url
              : item.image_versions2?.items?.length
              ? item.image_versions2.items.find((img) => img.url)?.url
              : additionalData?.cover_media?.cropped_image_version?.url ?? null;

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
