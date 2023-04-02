import { configureStore } from "@reduxjs/toolkit";
import countriesSlice from "../features/countriesSlice";
import favouritesSlice from "../features/favouritesSlice";

export default configureStore({
  reducer: {
    countries: countriesSlice,
    favourites: favouritesSlice,
  },
});
