import {createSlice} from "@reduxjs/toolkit"
import countryService from "../services/countries"

export const countrySlice = createSlice({
    name: 'countries',
    initialState:{
        countries:[],
    },

    reducers:{
        getCountries(state, action){
            state.countries= action.payload
        }
    },
})

export const initializeCountries = () => {
    return async (dispatch) => {
        const countries = await countryService.getAll();
        dispatch(getCountries(countries));
    }
}

export const {getCountries} = countrySlice.actions

export default countrySlice.reducer