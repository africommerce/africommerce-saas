import { configureStore } from '@reduxjs/toolkit';
import { cartReducers } from './cart-slice';

const store = configureStore({
  reducer: {
    cart: cartReducers,
  },
});
export default store;
