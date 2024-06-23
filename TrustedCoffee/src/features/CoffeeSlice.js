import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCoffees = createAsyncThunk('coffee/fetchCoffees', async () => {
  const response = await axios.get('/api/coffees');
  return response.data;
});

const coffeeSlice = createSlice({
  name: 'coffee',
  initialState: {
    coffees: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoffees.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCoffees.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.coffees = action.payload;
      })
      .addCase(fetchCoffees.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default coffeeSlice.reducer;
