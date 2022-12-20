import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  inputs: [
    {
      id: 1,
      inputName: 'Text',
      tag: <input type="text" placeholder="Phone Number" />,
    },
  ],
};

const addForm = createSlice({
  name: 'add_form',
  initialState,
  reducers: {
    addInput(state, { payload }) {
      state.inputs = state.inputs.push({
        id: payload.id,
        inputName: payload.inputName,
        tag: payload.tagName,
      });
    },
    removeInput(state, { payload }) {},
  },
});

export const addFormReducers = addForm.reducer;
export const addFormActions = addForm.actions;
