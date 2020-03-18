import { productsAPI } from "../components/SliderProducts/api";
// import {updateObjectInArray} from "../components/SliderProducts/object-helpers";

const SET_PRODUCTS = "SET_PRODUCTS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_PRODUCTS_COUNT = "SET_TOTAL_PRODUCTS_COUNT";

let initialState = {
  products: [],
  pageSize: 1,
  productsQuantity: 0,
  currentPage: 1
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS: {
      return { ...state, products: action.products };
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

export const setProducts = products => ({ type: SET_PRODUCTS, products });
export const setCurrentPage = currentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage
});
export const setTotalProductsCount = productsQuantity => ({
  type: SET_TOTAL_PRODUCTS_COUNT,
  productsQuantity: productsQuantity
});

//когда компонент дид маунт (юзэффект) сделать повторный вызов уже из считав параметры из строки
// или первым грузится пагинатор из не задиспатчить обновление каррентпейдж из строки
//вызов хука внутри хука не работает??
export const useRequestProducts = (page, pageSize) => {
  return async dispatch => {
    console.log(page, pageSize);
    //page??
    // dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));
    console.log(page);
    let data = await productsAPI.getProducts(page, pageSize);
    // dispatch(toggleIsFetching(false));
    dispatch(setProducts(data.products));
    dispatch(setTotalProductsCount(data.productsQuantity));
  };
};
