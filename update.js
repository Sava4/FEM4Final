var axios = require("axios");

function updateSlide() {
  const updatedSlide = {
    imageUrl: "img1.jpg"
  };

  axios
    .post("/customers/login", {
      loginOrEmail: "maerkysh@gmail.com",
      password: "$2a$10$VIFQRamUq0JDJfJrDjPAK.SjnmbAcfKwSfY9UbZRL5z8LoLXmKtDS"
    })
    .then(response => {
      let token = response.data.token;
      let customId = "promotion-3"; //вставить нужный customId продукта
      axios
        .put(`/slides/${customId}`, updatedSlide, {
          headers: { Authorization: `${token}` }
        })
        .then(updatedSlide => {
          /*Do something with newProduct*/
          console.log(updatedSlide);
        })
        .catch(err => {
          /*Do something with error, e.g. show error to user*/
        });
    })
    .catch(err => {
      /*Do something with error, e.g. show error to user*/
    });
}
updateSlide()
