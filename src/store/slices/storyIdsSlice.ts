import { AnyAction, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '../store';
import { StoriesResponse } from 'models';
import { BASE_URL, MAX_STORIES } from '../../constants';

interface IStoriesState {
  storyIds: number[];
  loading: boolean;
  error: string | null;
}

const initialState: IStoriesState = {
  storyIds: [],
  loading: false,
  error: null,
};

export const fetchStoryIds = createAsyncThunk<
  StoriesResponse,
  string,
  {
    rejectValue: string;
  }
>('storyIds/fetchStoryIds', async (type, { rejectWithValue }) => {
  const response = await fetch(`${BASE_URL}/${type}stories.json`);

  if (response.status === 404) {
    return rejectWithValue('Not found');
  }

  const data = (await response.json()) as StoriesResponse;
  const fileredData = data.filter((_, i) => i < MAX_STORIES);

  return fileredData;
});

const isError = (action: AnyAction) => {
  return action.type.endsWith('rejected');
};

const storyIdsSlice = createSlice({
  name: 'storyIds',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStoryIds.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchStoryIds.fulfilled, (state, action) => {
      state.loading = false;
      state.storyIds = action.payload;
    });
    builder.addMatcher(isError, (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.storyIds = [];
      state.error = action.payload;
    });
  },
});

// export const {} = storyIdsSlice.actions;

export const selectStoryIds = (state: RootState) => state.storyIds;

export default storyIdsSlice.reducer;
