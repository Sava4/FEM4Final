import { productsAPI } from "../components/SliderProducts/api";

const SET_PRODUCTS = "SET_PRODUCTS";
const SET_MORE_PRODUCTS = "SET_MORE_PRODUCTS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_PRODUCTS_COUNT = "SET_TOTAL_PRODUCTS_COUNT";
// const SET_API_CATEGORY = "SET_API_CATEGORY";
// const SET_CATEGORY_QUERY = "SET_CATEGORY_QUERY";

let initialState = {
  // category: "earrings",
  products: [],
  pageSize: 9,
  productsQuantity: 0,
  currentPage: 1
  // apiCategory: "",
  // categoryQuery:"",
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
    // case SET_API_CATEGORY: {
    //   return { ...state, apiCategory: action.apiCategory };
    // }
    // case SET_CATEGORY_QUERY: {
    //   return { ...state, categoryQuery: action.categoryQuery };
    // }
    default:
      return state;
  }
};
//AC
export const setMoreProducts = products => ({
  type: SET_MORE_PRODUCTS,
  products
});
export const setProducts = products => ({
  type: SET_PRODUCTS,
  products
});
export const setCurrentPage = currentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage
});
export const setTotalProductsCount = productsQuantity => ({
  type: SET_TOTAL_PRODUCTS_COUNT,
  productsQuantity: productsQuantity
});
// export const setaApiCategory = apiCategory => ({
//   type: SET_API_CATEGORY,
//   apiCategory: apiCategory
// });
// export const setCategoryQuery = categoryQuery => ({
//   type: SET_CATEGORY_QUERY,
//   categoryQuery: categoryQuery
// });
//вызов хука внутри хука не работает??
export const useRequestProducts = (
  page,
  pageSize,
  categoryQuery,
  apiCategory,
  category2,
  query
) => {
  return async dispatch => {
    dispatch(setCurrentPage(page));
    // dispatch(setaApiCategory(apiCategory));
    // dispatch(setCategoryQuery(apiCategory));
    // console.log(page);
    let data = await productsAPI.getProducts(
      page,
      pageSize,
      categoryQuery,
      apiCategory,
      category2
    );
    console.log(
      "TCL: useRequestProducts -> categoryQuery,apiCategory",
      categoryQuery,
      apiCategory,
      category2
    );
    // dispatch(toggleIsFetching(false));
    dispatch(setProducts(data.products));
    dispatch(setTotalProductsCount(data.productsQuantity));
  };
};

export const useMoreProducts = (
  page,
  pageSize,
  categoryQuery,
  apiCategory,
  category2
) => {
  return async dispatch => {
    dispatch(setCurrentPage(page));
    // dispatch(setaApiCategory(apiCategory));
    // dispatch(setCategoryQuery(apiCategory));

    let moreData = await productsAPI.getProducts(
      page,
      pageSize,
      categoryQuery,
      apiCategory,
      category2
    );
    dispatch(setMoreProducts(moreData.products));
  };
};
