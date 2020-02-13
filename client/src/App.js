import React from "react";
//notification test comp
import Notification from "./Notification";
//notific test end
import GlobalStyle from "./GlobalStyle";

import { Provider as AlertProvider } from "react-alert";
import { Provider } from "react-redux";
import store from "./store";
import { NotificationTemplate, alertOptions } from "./Notification";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header, Spinner } from "./components";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <AlertProvider template={NotificationTemplate} {...alertOptions}>
        <Router>
          <div>
            <Route component={Header} />
            {/*<Spinner/>*/}
            <Notification />
            <h1>Hello from React</h1>
            <div>Regular text to read</div>
          </div>
        </Router>
      </AlertProvider>
    </Provider>
  );
}

export default App;
