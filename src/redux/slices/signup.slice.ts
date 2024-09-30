import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { signUpThunk } from '../thunks';

interface AuthState {
  user: string | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
};

export const signUpSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {},
  extraReducers: (builder) => { 
    builder
      .addCase(signUpThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signUpThunk.fulfilled, (state, action: PayloadAction<any>) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(signUpThunk.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
        state.isLoading = false;
      })
  },
});

export default signUpSlice.reducer;
