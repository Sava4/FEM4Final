import axios from "axios";

export function addSubscriber() {
  const newSubscriber = {
    email: "saribeg@gmail.com",
    letterSubject: "Test letter 2 (final project)",
    letterHtml: "rtyuiogp"
  };
  axios
    .post("http://localhost:5000/customers/login", {
      loginOrEmail: "customer@gmail.com",
      password: "1111111"
    })
    .then(response => {
      let token = response.data.token;
      axios
        .post("http://localhost:5000/subscribers", newSubscriber, {
          headers: { Authorization: `${token}` }
        })
        .then(newSubscriber => {
          console.log("success");
          console.log(newSubscriber);
        })
        .catch(err => {
          console.log("error add");
          console.log(err);
        });
    })
    .catch(err => {
      console.log("error auth");
      console.log(err);
    });
}
