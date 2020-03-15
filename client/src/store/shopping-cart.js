const ADD_SHOPPING_CART = "ADD_SHOPPING_CART";
const SET_SERVER_CART_PRODUCTS = "SET_SERVER_CART_PRODUCTS";

export const addToCart = itemNo => ({
  type: ADD_SHOPPING_CART,
  itemNo
});

export const setServerCart = payload => ({
  type: SET_SERVER_CART_PRODUCTS,
  payload
});

const initialState = {
  quantityById: {},
  serverProducts: []
};

const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_SHOPPING_CART:
      const { itemNo } = action;
      return { ...state, [itemNo]: (state[itemNo] || 0) + 1 };
    default:
      return state;
  }
};

const setSrvCart = (state = initialState.serverProducts, action) => {
  switch (action.type) {
    case SET_SERVER_CART_PRODUCTS:
      return [...action.payload];
    default:
      return state;
  }
};

export function shoppingCartReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return {
        quantityById: quantityById(state.quantityById, action),
        serverProducts: setSrvCart(state.serverProducts, action)
      };
  }
}
