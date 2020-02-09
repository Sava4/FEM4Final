import React from "react";
//notification test comp
import Notification from "./Notification";
//notific test end
import { positions, Provider as AlertProvider } from "react-alert";
import GlobalStyle from "./GlobalStyle";
import { NotificationTemplate, alertOptions } from "./Notification";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <AlertProvider template={NotificationTemplate} {...alertOptions}>
          <Notification />
          <h1>Hello from React</h1>
          <div>Regular text to read</div>
        </AlertProvider>
      </Provider>
    </>
  );
}

export default App;
