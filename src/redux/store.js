import { configureStore } from '@reduxjs/toolkit';
import { infoSlice } from './infoSlice';

const store = configureStore({
  reducer: {
    info: infoSlice.reducer,
  },
});

export default store;
