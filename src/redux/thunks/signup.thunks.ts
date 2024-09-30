import { createAsyncThunk } from "@reduxjs/toolkit";

import { signup } from "../apis/signup.api";
import { AUTH_SIGNUP_REQUESTED } from "../actions";

export const signUpThunk = createAsyncThunk(
  AUTH_SIGNUP_REQUESTED,
  async (data: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await signup(data);
      localStorage.setItem('jwtToken', response.data.accessToken);
      return response.data.user;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Ошибка регистрации. Попробуйте снова.');
    }
  }
);
