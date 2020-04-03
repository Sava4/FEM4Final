import styled, {css} from "styled-components";
import {NavLink} from "react-router-dom";
import {mediaMobile} from "../../styled-components/media-breakpoints-mixin";

export const CheckoutWrapper = styled.div`
  display: flex;
  max-width: 1200px;
  width: 80%;
  margin: 20px auto;
`;

export const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Header = styled.div`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
`;
export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  &: after {
    display: block;
    background: #3c3b3b;
    content: "";
    height: 1px;
    width: 100%;
  }
  ${props =>
    props.flex === "row" &&
    css`
      flex-direction: row;
      justify-content: space-between;
    `}
`;
export const TotalContainer = styled.div``;
export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 85px;
  margin-bottom: 20px;
  width: 100%;
  &: first-child {
    margin-top: 20px;
  }
  ${props =>
    props.height === "auto" &&
    css`
      height: auto;
    `}
`;

export const Img = styled.img`
  height: 84px;
  width: 80px;
  border: 1px solid #e9ebf5;
  &: hover {
    border: 1px solid #002d50;
  }
`;

export const WrapperLink = styled(NavLink)``;

export const Name = styled.p`
  width: 45%;
  line-height: 1.5;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 14px;
  text-transform: uppercase;
  ${mediaMobile(`
font-size: 12px;
  `)}
`;

export const Price = styled.p`
  &: after {
    content: " UAH";
    font-size: 10px;
  }
`;

export const Total = styled.p`
  margin-left: 73px;
  margin-top: -3px;
  position: absolute;
  border: 1px solid #a7aabb;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  font-size: 10px;
  text-align: center;
  vertical-align: center;
  padding-top: 2px;
  background: #eff5ff;
`;
