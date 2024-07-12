import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Country } from './reducer';

interface LikedCountriesState {
  likedCountries: Country[];
}

const initialState: LikedCountriesState = {
  likedCountries: [],
};

const likedProductSlice = createSlice({
  name: 'likedCountries',
  initialState,
  reducers: {
    add_like: (state, action: PayloadAction<Country>) => {
      state.likedCountries.push(action.payload);
    },
    unadd_like: (state, action: PayloadAction<Country>) => {
      state.likedCountries = state.likedCountries.filter(
        (country) => country.name.common !== action.payload.name.common
      );
    },
  },
});

export const { add_like, unadd_like } = likedProductSlice.actions;
export default likedProductSlice.reducer;
