import React from "react";
import { Provider } from "react-redux";
import { Routes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import ScrollTop from "./components/common/ScrollTop";
import { Layout } from "./components/common/Layout";
import GlobalStyle from "./styled-components/GlobalStyle";

import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "./store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GlobalStyle />
          <ScrollTop />
          <Layout>
            <Routes />
          </Layout>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
