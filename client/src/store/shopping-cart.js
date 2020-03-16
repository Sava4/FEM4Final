import { logoutAction } from "./login";
import setAuthorizationToken from "./login";
import axios from "axios";

const ADD_LOC_SHOPPING_CART = "ADD_LOC_SHOPPING_CART";
const CLEAR_LOCAL_CART = "CLEAR_LOCAL_CART";
const SET_SERVER_CART = "SET_SERVER_CART";

export const addToLocalCart = id => ({
  type: ADD_LOC_SHOPPING_CART,
  id
});

export const clearLocCart = () => ({
  type: CLEAR_LOCAL_CART
});

export const addToSrvCart = (id, token) => {
  return dispatch => {
    setAuthorizationToken(token);
    axios
      .put(`http://localhost:5000/cart/${id}`)
      .then(resp => dispatch(setServerCart(resp.data.products)))
      .catch(err => {
        console.error("Request Error", err);
        if (err.response.status === 401) {
          dispatch(logoutAction());
          dispatch(setServerCart([]));
        }
        console.error("Adding Product Failed");
      });
  };
};

export const mergeCarts = (token, locCart) => {
  setAuthorizationToken(token);
  return dispatch => {
    axios
      .get("http://localhost:5000/cart")
      .then(resp => {
        let srvCart;
        resp.data === null ? (srvCart = []) : (srvCart = resp.data.products);

        Object.entries(locCart).length === 0
          ? dispatch(setServerCart(srvCart))
          : putCart(locCart, srvCart);

        function putCart(locCart, srvCart) {
          let mergedObj = { ...locCart };
          // obj example {5e3d588c08b114095879a2fe: 2}
          srvCart.forEach(el => {
            if (el.product._id) {
              if (!mergedObj[el.product._id]) {
                mergedObj[el.product._id] = el.cartQuantity;
              } else {
                mergedObj[el.product._id] += el.cartQuantity;
              }
            }
          });

          const putReq = Object.entries(mergedObj).map(el => {
            const [id, qty] = el;
            return { product: id, cartQuantity: qty };
          });
          axios
            .put("http://localhost:5000/cart", { products: putReq })
            .then(resp => {
              dispatch(clearLocCart());
              dispatch(setServerCart(resp.data.products));
            })
            .catch(err => console.error("Request Error", err));
        }
      })
      .catch(err => {
        console.error("Request Error", err);
        if (err.response.status === 401) {
          dispatch(logoutAction());
        }
        dispatch(setServerCart([]));
      });
  };
};

export const setServerCart = payload => ({
  type: SET_SERVER_CART,
  payload
});

const initialState = {
  locCart: {},
  srvCart: []
};

const locCart = (state = initialState.locCart, action) => {
  switch (action.type) {
    case ADD_LOC_SHOPPING_CART:
      const { id } = action;
      return { ...state, [id]: (state[id] || 0) + 1 };
    case CLEAR_LOCAL_CART:
      return {};
    default:
      return state;
  }
};

const setSrvCart = (state = initialState.srvCart, action) => {
  switch (action.type) {
    case SET_SERVER_CART:
      return [...action.payload];
    default:
      return state;
  }
};

export function shoppingCartReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return {
        locCart: locCart(state.locCart, action),
        srvCart: setSrvCart(state.srvCart, action)
      };
  }
}
