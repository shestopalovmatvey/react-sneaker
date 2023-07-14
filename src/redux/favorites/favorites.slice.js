import { createSlice } from "@reduxjs/toolkit";

// initialState: [],

// initialState: {
//   favorites: []
// }

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    toggleToFavorites: (state, { payload }) => {
      const isFavorite = state.some((elem) => elem.id === payload.id);
      if (isFavorite) {
        return state.filter((elem) => elem.id !== payload.id);
      } else {
        state.push(payload);
      }
    },
  },
});

export const { actions, reducer } = favoritesSlice;
