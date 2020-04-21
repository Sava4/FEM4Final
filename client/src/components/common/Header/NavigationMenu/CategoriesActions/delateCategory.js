import React, {useState} from "react";
import axios from "axios";

export const deleteCategory = () => {
  // Delate category
 
  // axios
  // .get("http://localhost:5000/catalog")
  // .then(result => {
  //  console.log(result.data);
  //  const dropMenu = result.data.filter(item=> item.parentId==="Collections")
  //  dropMenu.forEach(({id})=>{
    const id = "engagement";
axios
    .post("http://localhost:5000/customers/login", {
      loginOrEmail: "customer@gmail.com",
      password: "1111111"
    })
    .then(response => {
      let token = response.data.token;

      axios
        .delete(`http://localhost:5000/catalog/${id}`, {
          headers: { Authorization: `${token}` }
        })
        .then(result => {       
          console.log(`Catigory ${id} was delated`);
        })
        .catch(err => {
          console.log(`Catigory ${id} was not delated`);
        });
    });
  //  })

  // })


  
}