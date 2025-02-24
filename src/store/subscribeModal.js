import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  openModal: true,
};
const subscribeModal = createSlice({
  name: 'subscribe',
  initialState,
  reducers: {
    subscribe(state, { payload }) {
      state.openModal = payload;
      console.log(state.openModal);
    },
  },
});

export const subscribeAction = subscribeModal.actions;
export const subscribeReducers = subscribeModal.reducer;
