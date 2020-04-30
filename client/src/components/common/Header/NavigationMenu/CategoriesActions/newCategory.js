import React, { useState } from "react";
import axios from "axios";

export const addCategory = () => {
  const nameOfKey = "jewelry";

  //   axios
  //   .get("http://localhost:5000/products")
  //   .then(result => {
  //    console.log(result.data)
  //    const allCollect= result.data.map(it =>it[nameOfKey]);
  //    const unicCOllections = () => Array.from(new Set(allCollect))
  //   let dataArrey = (unicCOllections());
  //   const zarinaDataArrey =dataArrey.filter(it=>(!it.includes("Love") && !it.includes("ZARINA")))
  //   console.log(dataArrey);
  //   console.log(zarinaDataArrey);
  // const parentMenuNAme = "collections"
  //   zarinaDataArrey.forEach(item =>{
  //      const newCategory = {
  //     id: item,
  //     name: item,
  //     parentId: parentMenuNAme,
  //     description: `A category named "${item}", of header drop menu "${parentMenuNAme}"`,
  //     level: 0
  //   };

  //   axios
  //     .post("http://localhost:5000/customers/login", {
  //       loginOrEmail: "customer@gmail.com",
  //       password: "1111111"
  //     })
  //     .then(response => {
  //       let token = response.data.token;
  //       console.log(token);
  //       axios
  //         .post("http://localhost:5000/catalog", newCategory, {
  //           headers: { Authorization: `${token}` }
  //         })
  //         .then(newCategory => {
  //           /*Do something with newProduct*/
  //           console.log(newCategory);
  //         })
  //         .catch(err => {
  //           console.log("Не добавлена категория");
  //         });
  //     });
  //   })

  //   })

  // POST NAME OF HEDER MENU
  // const newCategory = {
  //   id: nameOfKey,
  //   name: nameOfKey,
  //   parentId: "null",
  //   description: `Header drop menu "${nameOfKey}"`,
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

  // Update Existing Category
  // axios

  // axios
  //   .get("http://localhost:5000/catalog")
  //   .then(result => {
  //     console.log(result.data)
  /*Do something with newProduct*/

  // let filteredArrey = result.data.filter(it => (it.id.includes("ZARINA") && it.parentId != "null") )
  //       let filteredArrey = result.data.filter(it => ( it.parentId != "null") )
  //       console.log(filteredArrey);
  //       filteredArrey.forEach(item=>{
  //       const nameOfKey = "jewelry"
  // const apdateCategID = "";
  //      const updatedCategory = {
  //   id: item,
  //   name: item,
  //   parentId: nameOfKey,
  //   description: `A category named "${item}", of header drop menu "${nameOfKey}"`,
  //   level: 0
  // };

  const updatedCategory = {
    id: "earrings",
    name: "earrings",
    parentId: nameOfKey,
    imgUrl: "/img/homePage/categories/earring.png",
    // description: `A category named "${item}", of header drop menu "${nameOfKey}"`,
    level: 0
  };
  // отправка запроса на изменение категории
  axios
    .post("http://localhost:5000/customers/login", {
      loginOrEmail: "customer@gmail.com",
      password: "1111111"
    })
    .then(response => {
      let token = response.data.token;

      // const url =`http://localhost:5000/catalog/${item.id}`;
      const url = `http://localhost:5000/catalog/earrings
      
      
      
      `;
      console.log(url);
      axios
        .put(url, updatedCategory, {
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
  // // Завершение раздела отправка запроса на изменение категории
  // })

  // })
  // .catch(err => {
  //   console.log("Не добавлена категория");
  // });
};
