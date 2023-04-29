import { configureStore } from '@reduxjs/toolkit';
import { rankSlice } from './rankSlice';

const store = configureStore({
  reducer: {
    ranks: rankSlice.reducer,
  },
});

export default store;
