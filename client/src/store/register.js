import axios from "axios";

const REGISTRATION = "REGISTRATION";

export const redisterAction = (firstName, lastName, loginOrEmail, password) => {
  return doRegister(firstName, lastName, loginOrEmail, password);
};

const registerSuccessAction = (firstName, lastName, loginOrEmail, password) => ({
  type: REGISTRATION,
  payload: {
    firstName,
    lastName,
    loginOrEmail,
    password
  }
});

const InitialState = {
  firstName: "",
  lastName: "",
  loginOrEmail: "",
  password: ""
};

export function registerReducer(store = InitialState, action) {
  switch (action.type) {
    case REGISTRATION:
      return {
        ...store
      };
    default:
      return store;
  }
}

export const doRegister = (firstName, lastName, loginOrEmail, password) => {
  return dispatch => {
    axios
      .post("http://localhost:5000/customers", {
        firstName: firstName,
        lastName: lastName,
        loginOrEmail: loginOrEmail,
        password: password
      })
      .then(response => {
        dispatch(registerSuccessAction());
      })
      .catch(error => {
        console.log("error");
      });
  };
};


