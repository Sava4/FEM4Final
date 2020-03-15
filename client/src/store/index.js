// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

import { shoppingCardReducer } from "./shopping-card";
import { favoritesReducer } from "./favorites";
import { categoriesReduser } from "./headerMenu";
import { loginReducer } from "./login";
// import {productsReducer} from "./productsReducer"

// const rootReducer = combineReducers({
//   shoppingCard: shoppingCardReducer,
//   favorites: favoritesReducer,
//   categories: categoriesReduser,
//   login: loginReducer,
//   productsPage: productsReducer,
// });

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;


import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {productsReducer} from "./productsReducer"
import thunkMiddleware from "redux-thunk";
// import { reducer as formReducer } from 'redux-form'
// import appReducer from "./app-reducer";

let reducers = combineReducers({
  productsPage: productsReducer,
  shoppingCard: shoppingCardReducer,
    favorites: favoritesReducer,
    categories: categoriesReduser,
    login: loginReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));
window.__store__ = store;

export default store;