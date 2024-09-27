import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchPostById } from "../apis";
import { POST_FETCH_REQUESTED } from "../actions";

export const fetchPostByIdThunk = createAsyncThunk(
  POST_FETCH_REQUESTED,
  async (id: string) => {
    const response = await fetchPostById(id);
    return response.data;
  }
);