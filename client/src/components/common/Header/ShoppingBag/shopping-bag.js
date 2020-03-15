import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import bug from "./shopping-bag.png";
import { mediaMobile } from "../../../../styled-components/media-breakpoints-mixin";
export const ShoppingBag = () => {
  // Use state quantitybyid if not logged in,
  // after login use state.shoppingCart.serverProducts
  const count = useSelector(state =>
    Object.values(state.shoppingCart.quantityById).reduce(
      (acc, curr) => acc + curr,
      0
    )
  );

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
