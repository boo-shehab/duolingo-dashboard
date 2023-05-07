import { configureStore } from '@reduxjs/toolkit';
import { rankSlice } from './rankSlice';
import { userSlice } from './userSlice';

const store = configureStore({
  reducer: {
    ranks: rankSlice.reducer,
    users: userSlice.reducer,
  },
});

export default store;
