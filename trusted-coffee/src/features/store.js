import { configureStore } from '@reduxjs/toolkit';
import coffeeReducer from './coffeeSlice';

const store = configureStore({
  reducer: {
    coffee: coffeeReducer,
  },
});

export default store;
