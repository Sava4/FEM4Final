import React from "react";
import { Provider } from "react-redux";
import { Routes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styled-components/GlobalStyle";

import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "./store";

//import {Header, Spinner} from "./components";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GlobalStyle />
          <Routes />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
