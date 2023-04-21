import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Airtable from 'airtable';

export const fetchUserData = createAsyncThunk(
  'user/fetchUserData',
  async () => {
    const base = new Airtable({ apiKey: 'pat4pyZS6gErTkeIP.1a9e79f7fba71512a43d9732352288fff1de9d1d630ec85ef62cc8e0190be877' }).base('appmpkyp4MlIeMaS7');
    const userRecords = await base('User').select({
      view: 'Daily Leaderboard (by XP)',
      maxRecords: 10,
    }).all();
    return userRecords.map((user) => user.fields);
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: null,
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
