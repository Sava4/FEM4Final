import axios from "axios";

export function editConfigs() {
    const updateConfigs = {
        customId: "some-global-configs",
        development: {
          database: {
            uri: "mongodb+srv://fem4final:8Z05TVJhXYGXGFDZ@fem4final-pk2uc.mongodb.net/FEM4_PROD?retryWrites=true&w=majority"
          },
          email: {
            mailUser: "wear19801@gmail.com",
            mailPassword: "kikboxing",
            mailService: "gmail"
          },
          auth: {
            secretOrKey: "secret........"
          },
          infinitScrollEnabled: true,
          minOrderValue: 100,
          someCustomParam: "custom params value"
        },
        production: {
          database: {
            uri: "mongodb+srv://fem4final:8Z05TVJhXYGXGFDZ@fem4final-pk2uc.mongodb.net/FEM4_PROD?retryWrites=true&w=majority.............."
          },
          email: {
            mailUser: "wear19801@gmail.com",
            mailPassword: "kikboxing",
            mailService: "gmail"
          },
          auth: {
            secretOrKey: "secret........"
          },
          infinitScrollEnabled: true,
          minOrderValue: 100,
          someCustomParam: "custom params value"
        }
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
        .put("http://localhost:5000/configs/some-global-configs", updateConfigs, {
          headers: { Authorization: `${token}` }
        })
        .then(updateConfigs => {
          /*Do something with newProduct*/
          console.log(updateConfigs);
        })
        .catch(err => {
          /*Do something with error, e.g. show error to user*/
        });
    })
    .catch(err => {
      /*Do something with error, e.g. show error to user*/
    });
}

export function addConfigs() {
    const newConfigs = {
        customId: "some-global-configs",
        development: {
          database: {
            uri: "mongodb+srv://fem4final:8Z05TVJhXYGXGFDZ@fem4final-pk2uc.mongodb.net/FEM4_PROD?retryWrites=true&w=majority"
          },
          email: {
            mailUser: "wear19801@gmail.com",
            mailPassword: "kikboxing",
            mailService: "gmail"
          },
          auth: {
            secretOrKey: "secret........"
          },
          infinitScrollEnabled: true,
          minOrderValue: 100,
          someCustomParam: "custom params value"
        },
        production: {
          database: {
            uri: "mongodb+srv://fem4final:8Z05TVJhXYGXGFDZ@fem4final-pk2uc.mongodb.net/FEM4_PROD?retryWrites=true&w=majority.............."
          },
          email: {
            mailUser: "wear19801@gmail.com",
            mailPassword: "kikboxing",
            mailService: "gmail"
          },
          auth: {
            secretOrKey: "secret........"
          },
          infinitScrollEnabled: true,
          minOrderValue: 100,
          someCustomParam: "custom params value"
        }
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
        .post("http://localhost:5000/configs", newConfigs, {
          headers: { Authorization: `${token}` }
        })
        .then(newConfigs => {
          /*Do something with newProduct*/
          console.log(newConfigs);
        })
        .catch(err => {
          /*Do something with error, e.g. show error to user*/
        });
    })
    .catch(err => {
      /*Do something with error, e.g. show error to user*/
    });
}

export function delConfigs() {
axios
.post("http://localhost:5000/customers/login", {
  loginOrEmail: "customer@gmail.com",
  password: "1111111"
})
.then(response => {
  /*Do something with newProduct*/
  let token = response.data.token;

  axios
    .delete("http://localhost:5000/configs/some-global-configs", {
      headers: { Authorization: `${token}` }
    })
    .then(result => {
      /*Do something with newProduct*/
      console.log(result);
    })
    .catch(err => {
      /*Do something with error, e.g. show error to user*/
    });
})
.catch(err => {
  /*Do something with error, e.g. show error to user*/
});
}
