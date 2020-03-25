import axios from "axios";

export function addProduct() {
  const newProduct = {
    name: "Diamond white gold Necklace",
    currentPrice: 37700,
    previousPrice: 48800,
    categories: "necklaces",

    imageUrls: [
      "img/products/necklaces/1-199_912_.jpg"
      // "img/products/bracelets/1-199_122_1.jpg",
      // "img/products/earrings/0990.jpg",
      // "img/products/earrings/0992.jpg",
    ],
    quantity: 100,
    gemstone_color: "white",
    metal_color: "white",
    productUrl: "/necklaces",
    brand: "Zarina",
    collection: "Melanka",
    metal: "gold",
    gemstone: "diamond",
    weight: "2.76",
    sample: "585",
    myCustomParam: "some string or json for custom param"
  };

  axios
    .post("http://localhost:5000/customers/login", {
      loginOrEmail: "customer@gmail.com",
      password: "1111111"
    })
    .then(response => {
      /*Do something with newProduct*/
      let token = response.data.token;

      axios
        .post("http://localhost:5000/products", newProduct, {
          headers: { Authorization: `${token}` }
        })
        .then(newProduct => {
          /*Do something with newProduct*/
          console.log(newProduct);
        })
        .catch(err => {
          /*Do something with error, e.g. show error to user*/
        });
    })
    .catch(err => {
      /*Do something with error, e.g. show error to user*/
    });
}

export function updateProduct() {
  const updatedProduct = {
    name: "Diamond white gold Necklace", //required field
    categories: "necklaces"
  };

  axios
    .post("http://localhost:5000/customers/login", {
      loginOrEmail: "customer@gmail.com",
      password: "1111111"
    })
    .then(response => {
      /*Do something with newProduct*/
      let token = response.data.token;
      let _id = "5e3f10f0229fc818a0a3a35b"; // вставить _id продукта

      axios
        .put(`http://localhost:5000/products/${_id}`, updatedProduct, {
          headers: { Authorization: `${token}` }
        })
        .then(updatedProduct => {
          /*Do something with newProduct*/
          console.log(updatedProduct);
        })
        .catch(err => {
          /*Do something with error, e.g. show error to user*/
        });
    })
    .catch(err => {
      /*Do something with error, e.g. show error to user*/
    });
}

export function deleteOneProduct() {
  axios
    .post("http://localhost:5000/customers/login", {
      loginOrEmail: "customer@gmail.com",
      password: "1111111"
    })
    .then(response => {
      /*Do something with newProduct*/
      let token = response.data.token;
      console.log(token);
      let itemNo = "some product itemNo"; //вставить нужный itemNo продукта
      axios
        .delete(`http://localhost:5000/products/${itemNo}`, {
          headers: { Authorization: `${token}` }
        })
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
    });
}

export function deleteAllProducts() {
  axios
    .post("http://localhost:5000/customers/login", {
      loginOrEmail: "customer@gmail.com",
      password: "1111111"
    })
    .then(response => {
      let token = response.data.token;
      console.log(token);
      axios.get("http://localhost:5000/products/").then(products => {
        console.log(products);
        products.data
          .forEach(element => {
            let i = element.itemNo;
            axios
              .delete(`http://localhost:5000/products/${i}`, {
                headers: { Authorization: `${token}` }
              })
              .then(res => {
                console.log(res);
              })
              .catch(err => {
                console.log(err);
              });
          })
          .catch(err => {
            console.log(err);
          });
      });
    });
}
