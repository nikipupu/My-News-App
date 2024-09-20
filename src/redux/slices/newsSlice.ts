import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NewsState, Post } from '../../types/types';

const initialState: NewsState = {
  posts: [],
  total: 0,
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
  },
});

export const { setNews } = newsSlice.actions;
export default newsSlice.reducer;
