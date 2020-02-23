import React from "react";
import { Provider } from "react-redux";
import store from "../../../store";

import { HeaderContent } from "./Header/header";

export const Header = () => {
  return (
    <Provider store={store}>
      <HeaderContent></HeaderContent>
    </Provider>
  );
};
