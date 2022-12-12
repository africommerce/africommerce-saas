import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  adminCollapse: false,
  navWidth: 84,
};
const uiSlice = createSlice({
  name: 'ui_slice',
  initialState,
  reducers: {
    adminCollapse(state) {
      state.adminCollapse = !state.adminCollapse;
    },
    navWidth(state) {
      state.navWidth = 100;
    },
  },
});
export const uiActions = uiSlice.actions;
export const uiReducers = uiSlice.reducer;
