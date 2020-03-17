const USER = "USER";
const LOGOUT = "LOGOUT";

export const userAction = payload => ({
  type: USER,
  payload
});

const initialState = null;

export function userReducer(store = initialState, action) {
  switch (action.type) {
    case USER:
      return action.payload;
    case LOGOUT:
      return null;
    default:
      return store;
  }
}
