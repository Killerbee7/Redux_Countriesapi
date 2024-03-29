import { createSlice } from "@reduxjs/toolkit";



export const favouritesSlice = createSlice({
  name: "favourites",
  initialState: {
    favourites: [],
  },
  reducers: {
    getFavourites(state, action) {

    },
    addFavourite(state, action) {
      state.favourites = [...state.favourites, action.payload]
      localStorage.setItem('Favourites', JSON.stringify(state.favourites))
    },
    removeFavourite(state, action) {
      state.favourites = state.favourites.filter(
        (item) => item !== action.payload
      );
      localStorage.setItem("Favourites", JSON.stringify(state.favourites));
    },

    clearFavourites(state){
      state.favourites=[];
        localStorage.removeItem('Favourites')
    }
  }
})

export const {getFavourites, addFavourite, clearFavourites, removeFavourite}= favouritesSlice.actions

export default favouritesSlice.reducer;