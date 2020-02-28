import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import bug from "./shopping-bag.png";
import { mediaMobile } from "../../../../styled-components/media-breakpoints-mixin";
export const ShoppingBag = () => {
  const count = useSelector(state => {
    return state.shoppingCard.length;
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
  margin-left: 30px;
`;
