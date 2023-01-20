import { configureStore } from '@reduxjs/toolkit';
import { addFormReducers } from './add-seller-form';
import { cartReducers } from './cart-slice';
import { uiReducers } from './ui-Slice';
import { subscribeReducers } from './subscribeModal';
// import { loginSliceReducer } from './LoginSlice';

const store = configureStore({
  reducer: {
    cart: cartReducers,
    ui: uiReducers,
    form: addFormReducers,
    subscribe: subscribeReducers,
    // login: loginSliceReducer,
  },
});
export default store;
