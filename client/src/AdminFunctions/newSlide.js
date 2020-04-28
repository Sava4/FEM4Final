import axios from "axios";

export function addSlide() {
  const newSlide = {
    customId: "look_6",
    imageUrl: "img/looks/9.png",
  };

  axios
    .post("/customers/login", {
      loginOrEmail: "customer@gmail.com",
      password: "1111111",
    })
    .then((response) => {
      let token = response.data.token;

      axios
        .post("/slides", newSlide, {
          headers: { Authorization: `${token}` },
        })
        .then((newSlide) => {
          console.log(newSlide);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
}

export function updateSlide() {
  const updatedSlide = {
    imageUrl: "img3.jpg",
  };

  axios
    .post("/customers/login", {
      loginOrEmail: "customer@gmail.com",
      password: "1111111",
    })
    .then((response) => {
      let token = response.data.token;
      let customId = "promotion-3"; //вставить нужный customId продукта
      axios
        .put(`/slides/${customId}`, updatedSlide, {
          headers: { Authorization: `${token}` },
        })
        .then((updatedSlide) => {
          /*Do something with newProduct*/
          console.log(updatedSlide);
        })
        .catch((err) => {
          /*Do something with error, e.g. show error to user*/
        });
    })
    .catch((err) => {
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
    level: 0,
  };

  axios
    .post("/customers/login", {
      loginOrEmail: "customer@gmail.com",
      password: "1111111",
    })
    .then((response) => {
      let token = response.data.token;
      console.log(token);
      axios
        .post("/catalog", newCategory, {
          headers: { Authorization: `${token}` },
        })
        .then((newCategory) => {
          /*Do something with newProduct*/
          console.log(newCategory);
        })
        .catch((err) => {
          console.log("Не добавлена категория");
        });
    });
}

export function updateCategory() {
  const updatedCategory = {
    imgUrl: "/img/homePage/categories/rings.png",
  };

  axios
    .post("/customers/login", {
      loginOrEmail: "customer@gmail.com",
      password: "1111111",
    })
    .then((response) => {
      let token = response.data.token;
      console.log(token);
      axios
        .put("/catalog/RingsJewelry", updatedCategory, {
          headers: { Authorization: `${token}` },
        })
        .then((updatedCategory) => {
          console.log(updatedCategory);
        })
        .catch((err) => {
          console.log("Не добавлена категория", err);
        });
    });
}
