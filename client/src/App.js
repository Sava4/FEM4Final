import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { store } from "./store";



import { Header, Spinner } from "./components";


import './App.css';
import { Slider } from './Components/Slider';
import { Footer } from './Components/Footer';



function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route component={Header} />
          {/*<Spinner/>*/}
        </div>
      </Router>
    </Provider>


    <Slider />
    <Footer />

  );
}

export default App;
