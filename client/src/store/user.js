import axios from "axios";

const USER = "USER";
const USER_UPDATE = "USER_UPDATE";
const LOGOUT = "LOGOUT";

export const userAction = payload => ({
  type: USER,
  payload
});

export const updateUser = payload => ({
  type: USER_UPDATE,
  payload
});

const initialState = null;

export function userReducer(store = initialState, action) {
  switch (action.type) {
    case USER:
      return action.payload;
    case USER_UPDATE:
      return action.payload;
    case LOGOUT:
      return null;
    default:
      return store;
  }
}

export const update = data => {
  return dispatch => {
    axios
      .put("/customers", data)
      .then(response => {
        dispatch(updateUser(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
