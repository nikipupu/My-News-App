import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { loginThunk } from '../thunks';

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

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => { 
    builder
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginThunk.fulfilled, (state, action: PayloadAction<any>) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
        state.isLoading = false;
      });
  },
});

export default loginSlice.reducer;
