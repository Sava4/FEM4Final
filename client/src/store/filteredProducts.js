import axios from "axios";
const GET_FILTRED_PRODUCTS = "GET_FILTRED_PRODUCTS";

const getFilteredProducts = payload => ({
  type: GET_FILTRED_PRODUCTS,
  payload
});

const initialState = [];

export function filtersReduser(store = initialState, { type, payload }) {
  switch (type) {
    case GET_FILTRED_PRODUCTS:
      return {
        ...store,
        ...payload
      };
    default:
      return store;
  }
}

export const setfilterList = url => dispatch => {
  axios
    .get(`/products/filter?${url}`)
    .then(products => {
      /*Do something with products*/
    })
    .catch(err => {
      /*Do something with error, e.g. show error to user*/
    });
  dispatch(getFilteredProducts(url));
};
