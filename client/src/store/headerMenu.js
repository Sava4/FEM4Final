const GET_CATEGORIES = "GET_CATEGORIES";

const setCategories = payload => ({
  type: GET_CATEGORIES,
  payload
});

const initialState = [];

export function categoriesReduser(store = initialState, { type, payload }) {
  switch (type) {
    case GET_CATEGORIES:
      return [...store, ...payload];

    default:
      return store;
  }
}

export const getCategoriesList = () => async dispatch => {
  const result = await fetch("http://localhost:5000/catalog");
  const json = await result.json();
  dispatch(setCategories(json));
};
