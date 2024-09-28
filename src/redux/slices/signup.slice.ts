import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { signupThunk } from '../thunks';

interface AuthState {
  user: { email: string; firstName: string } | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
};

export const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {},
  extraReducers: (builder) => { 
    builder
      .addCase(signupThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signupThunk.fulfilled, (state, action: PayloadAction<any>) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(signupThunk.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
        state.isLoading = false;
      })
  },
});

export default signupSlice.reducer;
