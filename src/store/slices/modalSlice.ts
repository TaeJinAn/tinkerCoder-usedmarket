import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  isOpen: boolean;
}

const initialState: CounterState = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    modalOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
    modalClose: (state) => {
      state.isOpen = !state.isOpen;
    }
  },
});
export const { modalOpen, modalClose } = modalSlice.actions;
export default modalSlice.reducer;
