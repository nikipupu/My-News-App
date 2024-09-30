import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { logInThunk } from '../thunks';

interface AuthState {
  user: any | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
};

export const logInSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => { 
    builder
      .addCase(logInThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logInThunk.fulfilled, (state, action: PayloadAction<any>) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(logInThunk.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
        state.isLoading = false;
      });
  },
});

export default logInSlice.reducer;
