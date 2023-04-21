import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './userSlice';
import { infoSlice } from './infoSlice';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    info: infoSlice.reducer,
  },
});

export default store;
