import axios from 'axios';

const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const loginAction = (loginOrEmail, password) => {
  return doLogin(loginOrEmail, password);
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

export const doLogin = (loginOrEmail, password) => {
  return dispatch => {
    axios.post("http://localhost:5000/customers/login", {
      loginOrEmail: loginOrEmail,
      password: password
    }).then((response) => {
      dispatch(loginSuccessAction(response.data.token));
    }).catch((error) => {
      console.log("There is no user with the given username and password")
    })
  }
};