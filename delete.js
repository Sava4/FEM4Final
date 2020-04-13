var axios = require("axios");

function deleteAllProducts() {
    axios
      .post("http://localhost:5000/customers/login", {
        loginOrEmail: "customer@gmail.com",
        password: "1111111"
      })
      .then(response => {
        let token = response.data.token;
        console.log(token);
        axios.get("http://localhost:5000/products/").then(products => {
        //   console.log(products);
          products.data
            .forEach(element => {
              let i = element.itemNo;
              // console.log("TCL: deleteAllProducts -> element", element)
              
              if (element.categories === "rings"){
              axios
                .delete(`http://localhost:5000/products/${i}`, {
                  headers: { Authorization: `${token}` }
                })
                .then(res => {
                  console.log( "success",res);
                  
                })
                .catch(err => {
                  console.log('error',err);
                });
              }
            })            
            // .catch(err => {
            //   console.log(err);
            // });
        });
      });
  }
  deleteAllProducts()