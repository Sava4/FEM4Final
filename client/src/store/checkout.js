export const ADD_INFORMATION = "ADD_INFORMATION";
export const ADD_SHIPPING = "ADD_SHIPPING";
export const ADD_PAYMENT = "ADD_PAYMENT";
export const REMOVE_INFORMATION = "REMOVE_INFORMATION";

const initialState = {
  infArr: []
};

export function informationReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_INFORMATION:
      return { infArr: state.infArr.concat(action.obj) };
    case REMOVE_INFORMATION:
      return { infArr: state.infArr.filter(el => el !== action.obj) };
    default:
      return state;
  }
}

export const addInformation = obj => ({
  infArr: obj,
  type: ADD_INFORMATION
});
export const removeInformation = obj => ({
  obj: obj,
  type: REMOVE_INFORMATION
});
