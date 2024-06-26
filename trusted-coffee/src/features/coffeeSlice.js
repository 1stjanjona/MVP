import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

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

const { actions: coffeeActions, reducer: coffeeReducer } = coffeeSlice;

const fetchCoffees = createAsyncThunk('coffee/fetchCoffees', async () => {
  const response = await axios.get('https://api.example.com/coffees');
  return response.data;
});

coffeeSlice.extraReducers(builder => {
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
});

const fetchData = async () => {
  try {
    const response = await axios.get('https://api.example.com/coffees');
    console.log('Fetched data:', response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export { fetchData };

export const { fetchCoffees } = coffeeActions;
export default coffeeReducer;
