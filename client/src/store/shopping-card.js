const ADD_SHOPPING_CARD = "ADD_SHOPPING_CARD";

const initialState = [];

export function shoppingCardReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SHOPPING_CARD:
      return state.concat(action.payload);
    default:
      return state;
  }
}
