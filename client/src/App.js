import React from "react";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import GlobalStyle from "./styledComponents/GlobalStyle";
import { Provider } from "react-redux";
import { LoadCategories } from "./components/common/Header/NavigationMenu/LoadCategories";
import { Routes } from "./routes";
import { persistor, store } from "./store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <LoadCategories />
        <PersistGate loading={null} persistor={persistor}>
          <GlobalStyle />
          <Routes />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
