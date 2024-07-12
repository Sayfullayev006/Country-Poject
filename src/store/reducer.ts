import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ReactNode } from 'react';

export interface Country {
  region: ReactNode;
  capital: ReactNode;
  name: {
    common: string;
  };
  population: number;
  flags: {
    png: string;
  };
}

interface CountriesState {
  countries: Country[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CountriesState = {
  countries: [],
  status: 'idle',
};

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
  const response = await axios.get('https://restcountries.com/v3.1/all');
  return response.data;
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = 'idle';
        state.countries = action.payload;
      })
      .addCase(fetchCountries.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default countriesSlice.reducer;
