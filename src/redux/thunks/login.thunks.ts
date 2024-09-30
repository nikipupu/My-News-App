import { createAsyncThunk } from "@reduxjs/toolkit";

import { login } from "../apis/login.api";
import { AUTH_LOGIN_REQUESTED } from "../actions";

export const logInThunk = createAsyncThunk(
  AUTH_LOGIN_REQUESTED,
  async (data: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await login(data);
      localStorage.setItem('jwtToken', response.data.accessToken);
      return response.data.user;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Ошибка входа. Попробуйте снова.');
    }
  }
);
