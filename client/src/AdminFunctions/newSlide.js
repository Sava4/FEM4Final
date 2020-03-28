import axios from "axios";

export function addSlide() {
  const newSlide = {
    customId: "look_6",
    imageUrl: "img/looks/9.png"
  };

  axios
    .post("http://localhost:5000/customers/login", {
      loginOrEmail: "customer@gmail.com",
      password: "1111111"
    })
    .then(response => {
      let token = response.data.token;

      axios
        .post("http://localhost:5000/slides", newSlide, {
          headers: { Authorization: `${token}` }
        })
        .then(newSlide => {
          console.log(newSlide);
        })
        .catch(err => {
          console.log(err);
        });
    })
    .catch(err => {
      console.log(err);
    });
}

export function updateSlide() {
  const updatedSlide = {
    imageUrl: "img3.jpg"
  };

  axios
    .post("http://localhost:5000/customers/login", {
      loginOrEmail: "customer@gmail.com",
      password: "1111111"
    })
    .then(response => {
      let token = response.data.token;
      let customId = "promotion-3"; //вставить нужный customId продукта
      axios
        .put(`http://localhost:5000/slides/${customId}`, updatedSlide, {
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

export function addCategory() {
  const newCategory = {
    id: "Watches",
    name: "Watches",
    parentId: "Souvenirs",
    imgUrl: " ",
    description: "A category, of earrings",
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
