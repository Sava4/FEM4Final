import React from "react";
import styled from "styled-components";

import bug from "./shopping-bag.png";
import { mediaMobile } from "../../../styled-components/media-breakpoints-mixin";

export const ShoppingBag = props => {
  console.log(props);
  return (
    <ServicesIcon>
      <ShoppingBagIcon />
      <ShoppingBagCounter>({props.count})</ShoppingBagCounter>
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
