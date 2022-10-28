import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { StoriesResponse } from 'models';
import { BASE_URL, MAX_STORIES } from '../../constants';

export const storyApi = createApi({
  reducerPath: 'api/stories',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    getStories: build.query<StoriesResponse, string>({
      query: (type: string) => `/${type}stories.json`,
      transformResponse: (response: StoriesResponse) => response.filter((_, i) => i < MAX_STORIES),
    }),
  }),
});

export const { useGetStoriesQuery } = storyApi;
