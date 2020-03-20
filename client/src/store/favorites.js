export const ADD_FAVORITE = "ADD_FAVORITE";

const initialState = {
  favArr: [
    "5e3d56d808b114095879a2fd",
    "5e3dc992673d211878b1cd2f",
    "5e3dd87d673d211878b1cd35"
  ]
};

export function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITE:
      return state.favArr.concat(action.payload);
    default:
      return state;
  }
}
