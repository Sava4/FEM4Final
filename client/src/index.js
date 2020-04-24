import React from "react";
import { hydrate, render } from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import axios from 'axios'
function updateCategory() {
  const updatedCategory = {
    id: "NecklacesJewelry",
    name: "Necklaces",
    parentId: "Jewelry",  
   
    imgUrl: "/img/homePage/categories/necklaces.png",    
  };

  axios
    .post("http://localhost:5000/customers/login", {
      loginOrEmail: "customer@gmail.com",
      password: "1111111"
    })
    .then(response => {
      let token = response.data.token;
      console.log(token);
      axios
        .put("http://localhost:5000/catalog/BraceletsJewelry", updatedCategory, {
          headers: { Authorization: `${token}` }
        })
        .then(updatedCategory => {       
          console.log(updatedCategory );
        })
        .catch(err => {
          console.log("Не добавлена категория",err );
        });
    });
}
// updateCategory()
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
