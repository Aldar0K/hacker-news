import { configureStore } from '@reduxjs/toolkit';
import storyIdsReducer from './slices/storyIdsSlice';

export const store = configureStore({
  reducer: {
    storyIds: storyIdsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
