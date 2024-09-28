import { createAsyncThunk } from "@reduxjs/toolkit";

import { login } from "../apis/login.api";
import { AUTH_LOGIN_REQUESTED } from "../actions";

export const loginThunk = createAsyncThunk(
    AUTH_LOGIN_REQUESTED,
    async (data: { email: string; password: string }) => {
      const response = await login(data);
      return response.data;
    }
  );