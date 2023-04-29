import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Airtable from 'airtable';

export const fetchRanksData = createAsyncThunk(
  'ranks/fetchRanksData',
  async () => {
    const base = new Airtable({ apiKey: 'pat4pyZS6gErTkeIP.1a9e79f7fba71512a43d9732352288fff1de9d1d630ec85ef62cc8e0190be877' }).base('appmpkyp4MlIeMaS7');
    const infoRecords = await base('TBot users').select({
      view: 'Daily Leaderboard',
    }).all();
    let StudyPlace = {};
    let Neighborhood = {};
    let Province = {};
    infoRecords.forEach((info) => {
      try {
        StudyPlace[info.fields['Study Place']] = StudyPlace[info.fields['Study Place']] || {
          userCounter: 0,
          xpCounter: 0,
        };
        StudyPlace[info.fields['Study Place']].xpCounter += Number(info.fields['Daily XP'][0]);
        StudyPlace[info.fields['Study Place']].userCounter += 1;
      } catch (error) {
        console.error(error);
      } try {
        Neighborhood[info.fields.Neighborhood] = Neighborhood[info.fields.Neighborhood] || {
          userCounter: 0,
          xpCounter: 0,
        };
        Neighborhood[info.fields.Neighborhood].xpCounter += Number(info.fields['Daily XP'][0]);
        Neighborhood[info.fields.Neighborhood].userCounter += 1;
      } catch (error) {
        console.error(error);
      } try {
        Province[info.fields.Province] = Province[info.fields.Province] || {
          userCounter: 0,
          xpCounter: 0,
        };
        Province[info.fields.Province].xpCounter += Number(info.fields['Daily XP'][0]);
        Province[info.fields.Province].userCounter += 1;
      } catch (error) {
        console.error(error);
      }
    });

    StudyPlace = Object.entries(StudyPlace).sort((a, b) => b[1].xpCounter - a[1].xpCounter);
    Neighborhood = Object.entries(Neighborhood).sort((a, b) => b[1].xpCounter - a[1].xpCounter);
    Province = Object.entries(Province).sort((a, b) => b[1].xpCounter - a[1].xpCounter);

    return [StudyPlace, Neighborhood, Province, infoRecords.map((user) => user.fields)];
  },
);

export const rankSlice = createSlice({
  name: 'info',
  initialState: {
    StudyPlace: [],
    Neighborhood: [],
    Province: [],
    Users: [],
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRanksData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRanksData.fulfilled, (state, action) => {
        state.loading = false;
        const [StudyPlace, Neighborhood, Province, users] = action.payload;
        state.StudyPlace = StudyPlace;
        state.Neighborhood = Neighborhood;
        state.Province = Province;
        state.Users = users;
      })
      .addCase(fetchRanksData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
