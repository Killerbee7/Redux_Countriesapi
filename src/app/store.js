import { configureStore } from '@reduxjs/toolkit';
import countriesSlice from '../features/countriesSlice';

export default configureStore({
  reducer: {
    countries: countriesSlice,
  },
});
