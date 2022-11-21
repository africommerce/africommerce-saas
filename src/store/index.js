import { configureStore } from '@reduxjs/toolkit';
import { cartReducers } from './cart-slice';
import { uiReducers } from './ui-Slice';

const store = configureStore({
  reducer: {
    cart: cartReducers,
    ui: uiReducers,
  },
});
export default store;
