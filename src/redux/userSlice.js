import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Airtable from 'airtable';

export const fetchUsersData = createAsyncThunk(
  'users/fetchUsersData',
  async ({ filterKey, filterValue }) => {
    const base = new Airtable({ apiKey: 'pat4pyZS6gErTkeIP.1a9e79f7fba71512a43d9732352288fff1de9d1d630ec85ef62cc8e0190be877' }).base('appmpkyp4MlIeMaS7');
    const infoRecords = await base('TBot users').select({
      view: '[Public] Leaderboard (All Provinces)',
      filterByFormula: filterKey ? `{${filterKey}} = '${filterValue}'` : '',
    }).all();
    return infoRecords.map((user) => user.fields);
  },
);

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsersData.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsersData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
