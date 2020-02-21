import { createStore, combineReducers } from "redux";

import { shoppingCardReducer } from "./shopping-card";
import { favoritesReducer } from "./favorites";
import { staticPageReducer } from "./static";

const rootReducer = combineReducers({
  shoppingCard: shoppingCardReducer,
  favorites: favoritesReducer,
  staticPage: staticPageReducer
});

export const store = createStore(rootReducer);
