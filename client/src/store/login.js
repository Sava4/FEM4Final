import axios from "axios";
import { userAction } from "./user";
import { mergeCarts } from "./shopping-cart";
import { loginStatusAction } from "./login-status";

const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";
const REMEMBER = "REMEMBER";

export const loginAction = (
  loginOrEmail,
  password,
  remember,
  locCart,
  onLogin
) => {
  return auth(loginOrEmail, password, remember, locCart, onLogin);
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

const loginRememberAction = ({ loginOrEmail, password }) => ({
  type: REMEMBER,
  payload: {
    loginOrEmail,
    password
  }
});

const InitialState = {
  token: null,
  loginOrEmail: null,
  password: null
};

export function loginReducer(state = InitialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, token: action.payload.token };
    case REMEMBER:
      return {
        ...state,
        loginOrEmail: action.payload.loginOrEmail,
        password: action.payload.password
      };
    case LOGOUT:
      return { ...state, token: null };
    default:
      return state;
  }
}

export const auth = (loginOrEmail, password, remember, locCart, onLogin) => {
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
        dispatch(mergeCarts(token, locCart));
        axios
          .get("http://localhost:5000/customers/customer", {
            headers: { Authorization: token }
          })
          .then(response => {
            const user = response.data;
            dispatch(userAction(user));
            setAuthorizationToken(token);
            if (remember === true) {
              dispatch(loginRememberAction({ loginOrEmail, password }));
            }
            onLogin();
          });
      })
      .catch(error => {
        console.log("error", error);
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
