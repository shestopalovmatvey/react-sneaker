import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    toggleToCart: (state, { payload }) => {
      const isAdded = state.some((elem) => elem.id === payload.id);
      if (isAdded) {
        return state.filter((elem) => elem.id !== payload.id);
      } else {
        state.push(payload);
      }
    },
  },
});

export const {actions, reducer} = cartSlice
