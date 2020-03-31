import React from "react";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import GlobalStyle from "./styled-components/GlobalStyle";
import {OnLoadCategories} from "./components/common/Header/NavigationMenu/onLoadCategories"
import { Routes } from "./routes";
import { persistor, store } from "./store";


function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <OnLoadCategories/>
        <PersistGate loading={null} persistor={persistor}>
          <GlobalStyle />
          <Routes />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
