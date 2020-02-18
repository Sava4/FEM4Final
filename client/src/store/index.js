import { createStore, combineReducers } from "redux";

import { shoppingCardReducer } from "./shopping-card";
import { favoritesReducer } from "./favorites";

const rootReducer = combineReducers({
  shoppingCard: shoppingCardReducer,
  favorites: favoritesReducer
});

export const store = createStore(rootReducer);
