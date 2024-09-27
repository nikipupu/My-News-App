import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Post } from '../../types';
import { fetchPostByIdThunk } from '../thunks';

interface PostState {
  post: Post | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: PostState = {
  post: null,
  isLoading: false,
  error: null,
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => { 
    builder
      .addCase(fetchPostByIdThunk.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchPostByIdThunk.fulfilled, (state, action: PayloadAction<Post>) => {
        state.post = action.payload
        state.isLoading = false
      })
      .addCase(fetchPostByIdThunk.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
        state.isLoading = false
      })
  },
});

export default postSlice.reducer;
