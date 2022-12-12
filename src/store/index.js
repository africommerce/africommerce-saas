import { configureStore } from '@reduxjs/toolkit';
import { addFormReducers } from './add-seller-form';
import { cartReducers } from './cart-slice';
import { uiReducers } from './ui-Slice';

const store = configureStore({
  reducer: {
    cart: cartReducers,
    ui: uiReducers,
    form: addFormReducers,
  },
});
export default store;
