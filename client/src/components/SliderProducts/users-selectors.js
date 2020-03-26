import { createSelector } from "reselect";

const getProductsSelector = state => {
  return state.productsPage.products;
};

export const moreProducts = createSelector(getProductsSelector, products => {
  return products.filter(p => true);
});

export const getProducts = createSelector(getProductsSelector, products => {
  return products.filter(p => true);
});

export const getPageSize = state => {
  return state.productsPage.pageSize;
};

export const getTotalProductsCount = state => {
  return state.productsPage.productsQuantity;
};

export const getCurrentPage = state => {
  return state.productsPage.currentPage;
};

// export const getIsFetching = (state) => {
//     return state.usersPage.isFetching;
// }
// export const getFollowingInProgress = (state) => {
//     return state.usersPage.followingInProgress;
// }

// export const countSomethingDifficult = (state) => {
//     debugger
//     //for... math... big arrays
//     let count = 23;
//     return count;
// }
