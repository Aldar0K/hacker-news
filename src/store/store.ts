import { configureStore } from '@reduxjs/toolkit';
import { storyApi } from './story/story.api';

export const store = configureStore({
  reducer: {
    [storyApi.reducerPath]: storyApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(storyApi.middleware),
});
