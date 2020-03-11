import axios from "axios";
import { userAction } from "./user";
import { loginStatusAction } from "./login-status";

const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const loginAction = (loginOrEmail, password, remember, onLogin) => {
  return auth(loginOrEmail, password, remember, onLogin);
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

export const auth = (loginOrEmail, password, remember, onLogin) => {
  return dispatch => {
    axios
      .post("http://localhost:5000/customers/login", {
        loginOrEmail: loginOrEmail,
        password: password
      })
      .catch(error => {
        dispatch(loginStatusAction(error.response.data));
        return Promise.reject(error);
      })
      .then(response => {
        dispatch(loginStatusAction(null));
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
            if (remember === true) {
              localStorage.setItem("email", loginOrEmail);
              localStorage.setItem("password", password);
            }
            onLogin();
          });
      })
      .catch(error => {
        console.log("error");
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
