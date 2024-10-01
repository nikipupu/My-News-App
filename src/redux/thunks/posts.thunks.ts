import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchPosts } from "../apis";
import { POSTS_FETCH_REQUESTED } from "../actions";

export const fetchPostsThunk = createAsyncThunk(
  POSTS_FETCH_REQUESTED,
  async () => {
    const response = await fetchPosts();
    return response.data.posts;
  }
);