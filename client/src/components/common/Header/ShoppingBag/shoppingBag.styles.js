import { NavLink } from "react-router-dom";
import styled from "styled-components";
import bug from "./shoppingBagIcon.png";
import { mediaMobile } from "../../../../styled-components/MediaBreakpointsMixin";

export const ShoppingBagIcon = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  background-image: url(${bug});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const ShoppingBagCounter = styled.span`
  ${mediaMobile(`
        display: none;
    `)}
`;

export const ServicesIcon = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-left: 30px;
`;
