import { configureStore } from '@reduxjs/toolkit';
import countriesSlice from '../features/countriesSlice';
import favoritesSlice from '../features/favoritesSlice';

export default configureStore({
  reducer: {
    countries: countriesSlice,
    favorites: favoritesSlice,
  },
});
