import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { shoppingCardReducer } from "./shopping-card";
import { favoritesReducer } from "./favorites";
import { categoriesReduser } from "./headerMenu";
import { loginReducer } from "./login";
import {filtersReduser} from "./filters"
import { userReducer } from "./user";
import { loginStatusReducer } from "./login-status";

const rootReducer = combineReducers({
  shoppingCard: shoppingCardReducer,
  favorites: favoritesReducer,
  categories: categoriesReduser,
  filters: filtersReduser,
  login: loginReducer,
  loginStatus: loginStatusReducer,
  user: userReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
