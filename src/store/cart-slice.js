import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, { payload }) {
      const id = payload.id;
      const itemIsAvailable = state.items.find((item) => (item.id = id));
      if (!itemIsAvailable) {
        state.totalQuantity = state.totalPrice + 1;
        return state.items.push(payload);
      }
      if (itemIsAvailable) {
        state.totalQuantity = state.totalPrice + 1;
        itemIsAvailable.quantity = payload.quantity;
        itemIsAvailable.totalPrice =
          itemIsAvailable.totalPrice * payload.quantity;
      }
    },
    removeItems(state, { payload }) {
      const id = payload.id;
      const itemAvailable = state.items.filter((item) => (item.id = id));
      if (itemAvailable.quantity > 1) {
        itemAvailable.quantity = itemAvailable.quantity - 1;
        state.totalQuantity = state.totalQuantity - 1;
        itemAvailable.totalPrice = itemAvailable.totalPrice * payload.quantity;
      }
      if (itemAvailable === 1) {
        state.items.pop(itemAvailable.id);
      }
    },
  },
});

export const cartAction = cartSlice.actions;
export const cartReducers = cartSlice.reducer;
