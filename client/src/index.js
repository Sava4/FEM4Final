import React from "react";
import ReactDOM from "react-dom";
import {addSubscriber} from './AdminFunctions/111'
import {updateSlide} from './AdminFunctions/newSlide'
// import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
addSubscriber();
// updateSlide()
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
