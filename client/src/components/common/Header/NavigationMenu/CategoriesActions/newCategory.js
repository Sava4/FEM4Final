import React, {useState} from "react";
import axios from "axios";

export const addCategory = () => {

  const nameOfKey ="Gift Cards";
  // axios
  // .get("http://localhost:5000/products")
  // .then(result => {
   
  //  const allCollect= result.data.map(it =>it[nameOfKey]);
  //  const unicCOllections = () => Array.from(new Set(allCollect))
  // let dataArrey = (unicCOllections());
  // console.log(dataArrey);

  // dataArrey.forEach(item =>{
  //    const newCategory = {
  //   id: item,
  //   name: item,
  //   parentId: nameOfKey,
  //   description: `A category named "${item}", of header drop menu "${nameOfKey}"`,
  //   level: 0
  // }; 
  
  // axios
  //   .post("http://localhost:5000/customers/login", {
  //     loginOrEmail: "customer@gmail.com",
  //     password: "1111111"
  //   })
  //   .then(response => {
  //     let token = response.data.token;
  //     console.log(token);
  //     axios
  //       .post("http://localhost:5000/catalog", newCategory, {
  //         headers: { Authorization: `${token}` }
  //       })
  //       .then(newCategory => {
  //         /*Do something with newProduct*/
  //         console.log(newCategory);
  //       })
  //       .catch(err => {
  //         console.log("Не добавлена категория");
  //       });
  //   });
  // })  

  // })

  // POST NAME OF HEDER MENU
  const newCategory = {
    id: nameOfKey,
    name: nameOfKey,
    parentId: "null",
    description: `Header drop menu "${nameOfKey}"`,
    level: 0
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
        .post("http://localhost:5000/catalog", newCategory, {
          headers: { Authorization: `${token}` }
        })
        .then(newCategory => {
          /*Do something with newProduct*/
          console.log(newCategory);
        })
        .catch(err => {
          console.log("Не добавлена категория");
        });
    });
 
 

  
}
