import axios from 'axios';

export function deleteOneProduct() {
  axios
    .post("http://localhost:5000/customers/login", { "loginOrEmail": "customer@gmail.com", "password": "1111111" })
    .then(response => {
      /*Do something with newProduct*/
      let token = response.data.token;
      console.log(token);
      let itemNo = "some product itemNo";//вставить нужный itemNo продукта
      axios 
        .delete(`http://localhost:5000/products/${itemNo}`, { headers: { "Authorization": `${token}` } })
        .then(res => {

          /*Do something with newProduct*/
          console.log(res);
        })
        .catch(err => {
          /*Do something with error, e.g. show error to user*/
        });
    })
    .catch(err => {
      /*Do something with error, e.g. show error to user*/

    })
}




export function deleteAllProducts() {
  axios
    .post("http://localhost:5000/customers/login", { "loginOrEmail": "customer@gmail.com", "password": "1111111" })
    .then(response => {
      /*Do something with newProduct*/
      let token = response.data.token;
      console.log(token);
      axios
        .get("http://localhost:5000/products/")
        .then(products => {
          console.log(products)
          products.data.forEach(element => {
            let i = element.itemNo;
            axios
              .delete(`http://localhost:5000/products/${i}`, { headers: { "Authorization": `${token}` } })
              .then(res => {

                /*Do something with newProduct*/
                console.log(res);
              })
              .catch(err => {
                /*Do something with error, e.g. show error to user*/
              });
          })
            .catch(err => {
              /*Do something with error, e.g. show error to user*/
            })
        })
    });
}

