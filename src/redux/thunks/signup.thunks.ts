import { createAsyncThunk } from "@reduxjs/toolkit";

import { signup } from "../apis/signup.api";
import { AUTH_SIGNUP_REQUESTED } from "../actions";

export const signupThunk = createAsyncThunk(
    AUTH_SIGNUP_REQUESTED,
    async (data: { email: string; password: string }) => {
      const response = await signup(data);
      return response.data;
    }
  );