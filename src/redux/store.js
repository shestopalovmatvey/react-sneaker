import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { reducer as favoriteReducer } from "./favorites/favorites.slice";
import { reducer as cartReducer } from "./cart/cart.slice";

const reducers = combineReducers({
  favorites: favoriteReducer,
  cart: cartReducer,
});

export const store = configureStore({
  reducer: reducers,
});
