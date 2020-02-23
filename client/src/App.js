import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { store } from "./store";

import { Header, Spinner, Footer, Slider } from "./Components";

import "./App.css";

import { StaticPageView } from "./Views/staticPage.js";
import { Homepage } from "./Views/homepage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {/* <Route component={Header} /> */}
          {/*<Spinner/>*/}
          {/* <Route component={Slider} />           */}
          <Route exact path="/" component={Homepage} />
          <Route exact path="/:url">
            <StaticPageView />
          </Route>
          <Redirect to="/" />
          {/* <Route component={Footer} /> */}
        </Switch>
      </Router>
    </Provider>
  );
}
export default App;
