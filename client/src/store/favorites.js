export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

const initialState = {
  favArr: []
};

export function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITE:
      return { favArr: state.favArr.concat(action.id) };
    case REMOVE_FAVORITE:
      return { favArr: state.favArr.filter(el => el !== action.id) };
    default:
      return state;
  }
}

export const addFavorites = id => ({
  id: id,
  type: ADD_FAVORITE
});
export const removeFavorites = id => ({
  id: id,
  type: REMOVE_FAVORITE
});
