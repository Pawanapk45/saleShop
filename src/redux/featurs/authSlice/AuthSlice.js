import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Thunk to check login status
export const checkLoginStatus = createAsyncThunk('auth/checkLoginStatus', async () => {
  const status = await AsyncStorage.getItem('isLoggedIn');
  return status === 'true'; 
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    loading: true,
  },
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
    },
    login: (state) => {
      state.isLoggedIn = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkLoginStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkLoginStatus.fulfilled, (state, action) => {
        state.isLoggedIn = action.payload;
        state.loading = false;
      })
      .addCase(checkLoginStatus.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { logout, login } = authSlice.actions;
export default authSlice.reducer;
