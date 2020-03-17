import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
// import logger from "redux-logger";

import { shoppingCartReducer } from "./shopping-cart";
import { favoritesReducer } from "./favorites";
import { categoriesReduser } from "./headerMenu";
import { loginReducer } from "./login";
import { filtersReduser } from "./filters";
import { userReducer } from "./user";
import { loginStatusReducer } from "./login-status";

const persistConfig = {
  key: "cart",
  storage,
  stateReconciler: autoMergeLevel2
  // only Cart will be persisted
};

const logPersistConfig = {
  key: "token",
  storage,
  stateReconciler: autoMergeLevel2
  // only Token will be persisted
};

const persistedCart = persistReducer(persistConfig, shoppingCartReducer);
const persistedToken = persistReducer(logPersistConfig, loginReducer);

import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { productsReducer } from "./productsReducer";
import thunkMiddleware from "redux-thunk";
// import { reducer as formReducer } from 'redux-form'
// import appReducer from "./app-reducer";

let reducers = combineReducers({
  productsPage: productsReducer,
  shoppingCard: shoppingCardReducer,
const rootReducer = combineReducers({
  shoppingCart: persistedCart,
  favorites: favoritesReducer,
  categories: categoriesReduser,
  login: persistedToken,
  loginStatus: loginStatusReducer,
  filters: filtersReduser,
  user: userReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
window.__store__ = store;

export default store;
export const persistor = persistStore(store);
