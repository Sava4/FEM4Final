import { NavLink } from "react-router-dom";
import styled from "styled-components";
import bug from "./shoppingBagIcon.png";
import { mediaMobile } from "../../../../styledComponents/MediaBreakpointsMixin";

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

export const CounterMobile = styled.div`
  display: none;
  ${mediaMobile(`
  display: block;
  position: absolute;
  top: 10px;
  right: 15px;
  background: #EFF5FF;
  border: 1px solid #A7AABB;
  border-radius: 100%;
  padding: 2px 4px;
  font-size: 9px;
  `)}
`;

export const ServicesIcon = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 30px;
`;
