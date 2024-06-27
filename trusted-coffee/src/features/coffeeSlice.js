import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the fetchCoffees function only once
export const fetchCoffees = createAsyncThunk('coffee/fetchCoffees', async () => {
  // Your fetchCoffees implementation here
});

const coffeeSlice = createSlice({
  name: 'coffee',
  initialState: [],
  reducers: {
    // Your reducers here
  },
  extraReducers: {
    [fetchCoffees.fulfilled]: (state, action) => {
      // Your fulfilled handler here
    },
  },
});

export const coffeeActions = coffeeSlice.actions;
export default coffeeSlice.reducer;
