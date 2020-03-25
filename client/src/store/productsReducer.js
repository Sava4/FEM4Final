import { productsAPI } from "../components/SliderProducts/api";

const SET_PRODUCTS = "SET_PRODUCTS";
const SET_MORE_PRODUCTS = "SET_MORE_PRODUCTS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_PRODUCTS_COUNT = "SET_TOTAL_PRODUCTS_COUNT";

let initialState = {
  products: [],
  pageSize: 6,
  productsQuantity: 0,
  currentPage: 1
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS: {
      return { ...state, products: action.products };
    }
    case SET_MORE_PRODUCTS: {
      return { ...state, products: [...state.products, ...action.products] };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_PRODUCTS_COUNT: {
      return { ...state, productsQuantity: action.productsQuantity };
    }

    default:
      return state;
  }
};
//AC
export const setMoreProducts = products => ({
  type: SET_MORE_PRODUCTS,
  products
});
export const setProducts = products => ({ type: SET_PRODUCTS, products });
export const setCurrentPage = currentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage
});
export const setTotalProductsCount = productsQuantity => ({
  type: SET_TOTAL_PRODUCTS_COUNT,
  productsQuantity: productsQuantity
});

//вызов хука внутри хука не работает??
export const useRequestProducts = (page, pageSize) => {
  return async dispatch => {
    // console.log(page, pageSize);
    dispatch(setCurrentPage(page));
    // console.log(page);
    let data = await productsAPI.getProducts(page, pageSize);
    // dispatch(toggleIsFetching(false));
    dispatch(setProducts(data.products));
    dispatch(setTotalProductsCount(data.productsQuantity));
  };
};

export const useMoreProducts = (page, pageSize) => {
  return async dispatch => {
    dispatch(setCurrentPage(page));
    let moreData = await productsAPI.getProducts(page, pageSize);
    dispatch(setMoreProducts(moreData.products));
  };
};
