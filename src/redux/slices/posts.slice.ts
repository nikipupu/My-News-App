import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Post } from '../../types';
import { fetchPostsThunk } from '../thunks';

interface PostsState {
  posts: Post[];
  isLoading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  posts: [],
  isLoading: false,
  error: null,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => { 
    builder
      .addCase(fetchPostsThunk.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchPostsThunk.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.posts = action.payload
        state.isLoading = false
      })
      .addCase(fetchPostsThunk.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
        state.isLoading = false
      })
  },
});

export default postsSlice.reducer;
