export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

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
      return { favArr: state.favArr.concat(action.id) };
    case REMOVE_FAVORITE:
      return { favArr: state.favArr.filter(id => id !== action.id) };
    default:
      return state;
  }
}

export const addFavorites = (id) => (
    {
      id: id,
      type: ADD_FAVORITE,
    }
);
export const removeFavorites = (id) => (
    {
      id: id,
      type: REMOVE_FAVORITE,
    }
);