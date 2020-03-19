import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import bug from "./shopping-bag.png";
import { mediaMobile } from "../../../../styled-components/media-breakpoints-mixin";
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
    <ServicesIcon>
      <ShoppingBagIcon />
      <ShoppingBagCounter>({count})</ShoppingBagCounter>
    </ServicesIcon>
  );
};

const ShoppingBagIcon = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  background-image: url(${bug});
  background-repeat: no-repeat;
  background-size: contain;
`;

const ShoppingBagCounter = styled.span`
  ${mediaMobile(`
        display: none;
    `)}
`;

const ServicesIcon = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
`;
