import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import { Header, Spinner } from "./components";

function App() {
  return (
    <Router>
      <div>
        <Route component={Header} />
        {/*<Spinner/>*/}
      </div>
    </Router>
  );
}

export default App;
