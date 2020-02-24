import axios from "axios";

export function addCategory() {
  const newCategory = {
    id: "BirthdaySouvenirs",
    name: "Birthday",
    parentId: "Souvenirs",
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
