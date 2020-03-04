const USER = "USER";

export const userAction = payload => ({
  type: USER,
  payload
});

const initialState = null;

export function userReducer(store = initialState, action) {
  switch (action.type) {
    case USER:
      return action.payload;
    default:
      return store;
  }
}
