import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { shoppingCardReducer } from "./shopping-card";
import { favoritesReducer } from "./favorites";
import { categoriesReduser } from "./headerMenu";

const rootReducer = combineReducers({
  shoppingCard: shoppingCardReducer,
  favorites: favoritesReducer,
  categories: categoriesReduser
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
