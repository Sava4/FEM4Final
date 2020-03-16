import axios from "axios";
import { userAction } from "./user";
import { mergeCarts } from "./shopping-cart";

const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

let locCart;
export const loginAction = (loginOrEmail, password, loc) => {
  locCart = loc;
  return auth(loginOrEmail, password);
};

export const logoutAction = () => ({
  type: LOGOUT
});

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
    case LOGOUT:
      return {
        token: null
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
        dispatch(mergeCarts(token, locCart));
        axios
          .get("http://localhost:5000/customers/customer", {
            headers: { Authorization: token }
          })
          .then(response => {
            const user = response.data;
            dispatch(userAction(user));
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
