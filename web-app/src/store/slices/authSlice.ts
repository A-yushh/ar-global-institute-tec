// Redux Toolkit Auth Slice in TypeScript
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import authService from '../../apiServices/authService';
import type { UserProfile, SignInCredentials, SignUpFormData, AuthResponse } from '../../apiServices/authService';
import type { RootState } from '../store';

const initialUser: UserProfile | null = authService.getCurrentUser();
const initialToken: string | null = typeof localStorage !== 'undefined' ? localStorage.getItem('ar_auth_token') : null;

export const signInThunk = createAsyncThunk<AuthResponse, SignInCredentials, { rejectValue: string }>(
  'auth/signIn',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await authService.signIn(credentials);
      return res;
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to sign in';
      return rejectWithValue(message);
    }
  }
);

export const signUpThunk = createAsyncThunk<AuthResponse, SignUpFormData, { rejectValue: string }>(
  'auth/signUp',
  async (formData, { rejectWithValue }) => {
    try {
      const res = await authService.signUp(formData);
      return res;
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Registration failed';
      return rejectWithValue(message);
    }
  }
);

export const signOutThunk = createAsyncThunk<boolean, void, { rejectValue: string }>(
  'auth/signOut',
  async (_, { rejectWithValue }) => {
    try {
      await authService.signOut();
      return true;
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Logout failed';
      return rejectWithValue(message);
    }
  }
);

export interface AuthState {
  user: UserProfile | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: initialUser,
  token: initialToken,
  isAuthenticated: Boolean(initialUser && initialToken),
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearAuthError(state) {
      state.error = null;
    },
    setUserDirect(state, action: PayloadAction<UserProfile | null>) {
      state.user = action.payload;
      state.isAuthenticated = Boolean(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      // Sign In
      .addCase(signInThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signInThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(signInThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? 'Failed to sign in';
      })

      // Sign Up
      .addCase(signUpThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signUpThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(signUpThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? 'Registration failed';
      })

      // Sign Out
      .addCase(signOutThunk.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const { clearAuthError, setUserDirect } = authSlice.actions;

// Selectors
export const selectUser = (state: RootState): UserProfile | null => state.auth.user;
export const selectIsAuthenticated = (state: RootState): boolean => state.auth.isAuthenticated;
export const selectAuthLoading = (state: RootState): boolean => state.auth.isLoading;
export const selectAuthError = (state: RootState): string | null => state.auth.error;

export default authSlice.reducer;
