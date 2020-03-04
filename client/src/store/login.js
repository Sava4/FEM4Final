import axios from "axios";
import { userAction } from "./user";

const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const loginAction = (loginOrEmail, password) => {
  return auth(loginOrEmail, password);
};

const loginSuccessAction = token => ({
  type: LOGIN_SUCCESS,
  payload: {
    token
  }
});

const InitialState = {
  token: null
};

export function loginReducer(store = InitialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        token: action.payload.token
      };
    default:
      return store;
  }
}

export const auth = (loginOrEmail, password) => {
  return dispatch => {
    axios
      .post("http://localhost:5000/customers/login", {
        loginOrEmail: loginOrEmail,
        password: password
      })
      .then(response => {
        const token = response.data.token;
        dispatch(loginSuccessAction(token));
        axios
          .get("http://localhost:5000/customers/customer", {
            headers: { Authorization: token }
          })
          .then(response => {
            const user = response.data;
            dispatch(userAction(user));
            localStorage.setItem("token", token);
            setAuthorizationToken(token);
          });
      })
      .catch(error => {
        console.log("There is no user with the given username and password");
      });
  };
};

export default function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}
