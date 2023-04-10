// authSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormData } from 'components/LoginForm/LoginForm';

interface AuthStateInterface {
  isAuthenticated: boolean;
  access_token: string | null;
  refresh_token: string | null;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
}

const initialState: AuthStateInterface = {
  isAuthenticated: false,
  access_token: null,
  refresh_token: null,
  first_name: null,
  last_name: null,
  email: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      Object.assign(state, initialState);
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.access_token = action.payload.access;
      state.refresh_token = action.payload.refresh;
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.email = action.payload.email;
    });
  },
});

export const login = createAsyncThunk(
  'login',
  async (data: { [key: string]: string }) => {
    try {
      const email = data.email;
      const password = data.password;

      const API_END_POINT = process.env.NEXT_PUBLIC_BACKEND_URL;
      const response = await fetch(
        `${API_END_POINT}/accounts/api/auth/token/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const results = await response.json();

      // Save the authentication token or user information to a state management solution or localStorage
      // For example: localStorage.setItem('token', data.token);
      return results;
    } catch (error) {
      console.error('Error:', error);
      // Display an error message to the user, if necessary
    }
  }
);

export const { logout } = authSlice.actions;
export default authSlice.reducer;
