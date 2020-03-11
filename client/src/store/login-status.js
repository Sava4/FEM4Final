const LOGIN_STATUS = "LOGIN_STATUS";

export const loginStatusAction = loginStatus => ({
  type: LOGIN_STATUS,
  payload: {
    loginStatus
  }
});

const InitialState = null;

export function loginStatusReducer(store = InitialState, action) {
  switch (action.type) {
    case LOGIN_STATUS:
      return action.payload.loginStatus;
    default:
      return store;
  }
}
