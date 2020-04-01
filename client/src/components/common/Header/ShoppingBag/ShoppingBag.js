import React from "react";
import { useSelector } from "react-redux";
import {
  ServicesIcon,
  ShoppingBagIcon,
  ShoppingBagCounter
} from "./shoppingBag.styles";

export const ShoppingBag = () => {
  // Use state Local Store Cart Quantity if not logged in,
  // after login use state.shoppingCart.srvCart Cart Quantity from Server
  // After Login the Two Carts are merged
  const count = useSelector(state => {
    const localCartCount = Object.values(state.shoppingCart.locCart).reduce(
      (acc, curr) => acc + curr,
      0
    );
    return state.login.token
      ? state.shoppingCart.srvCart.reduce(
          (acc, curr) => acc + curr.cartQuantity,
          0
        ) + localCartCount
      : localCartCount;
  });

  return (
    <ServicesIcon to="/account/shopping-bag">
      <ShoppingBagIcon />
      <ShoppingBagCounter>({count})</ShoppingBagCounter>
    </ServicesIcon>
  );
};
