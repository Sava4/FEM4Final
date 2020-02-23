import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  addSlide,
  updateSlide,
  addCategory,
  addProduct,
  updateProduct,
  deleteOneProduct,
  deleteAllProducts,
  addLinks,
  updateLinks,
  addPage
} from "./AdminFunctions/index.js";
import * as serviceWorker from "./serviceWorker";

// ОСТОРОЖНО !!! если раскомментить функцию она сразу заработает и может что-то добавить неужное, или удалить нужное из базы
// addSlide();
// updateSlide();
// addProduct();
updateProduct();
// deleteOneProduct();
// deleteAllProducts();
// addCategory()
// addLinks()
// updateLinks()
// addPage()

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
