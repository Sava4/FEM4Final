export const ADD_FAVORITE = "ADD_FAVORITE";

const initialState = [];

export function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITE:
      return state.concat(action.payload);
  }
  return state;
}
