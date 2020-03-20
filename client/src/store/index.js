import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
// import logger from "redux-logger";
import { productsReducer } from "./productsReducer";
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

const favoritesPersistConfig = {
  key: "favorites",
  storage,
  stateReconciler: autoMergeLevel2
  // only Favorites will be persisted
};

const persistedCart = persistReducer(persistConfig, shoppingCartReducer);
const persistedToken = persistReducer(logPersistConfig, loginReducer);
const persistedFavorites = persistReducer(
  favoritesPersistConfig,
  favoritesReducer
);

// import { reducer as formReducer } from 'redux-form'
// import appReducer from "./app-reducer";
const rootReducer = combineReducers({
  productsPage: productsReducer,
  shoppingCart: persistedCart,
  favorites: persistedFavorites,
  categories: categoriesReduser,
  login: persistedToken,
  loginStatus: loginStatusReducer,
  filters: filtersReduser,
  user: userReducer
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
