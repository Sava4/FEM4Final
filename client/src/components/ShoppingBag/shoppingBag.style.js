import styled, { css } from "styled-components";
import {
  mediaMobile,
  mediaQueryMobile
} from "../../styledComponents/MediaBreakpointsMixin";

export const Container = styled.div`
  margin: 0 auto;
  width: 92%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Continue = styled.div`
  align-self: flex-start;
  margin-top: 33px;
  cursor: pointer;
`;

export const ArrowImg = styled.img`
  vertical-align: top;
  height: 14px;
  margin-right: 9px;
`;

export const Cart = styled.div`
  display: flex;
  margin-top: 33px;
  align-self: stretch;
  ${mediaMobile(`
  flex-direction: column;
  `)}
`;
export const ProductTable = styled.div`
  width: 75%;
  display: flex;
  flex-wrap: wrap;
  padding-right: 57px;
  ${mediaMobile(`
  width: 98%;
    padding-right: 0;
  `)}
`;
export const BagTotals = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  height: 505px;
  padding-left: 42px;
  border-left: 1px solid #a7aabb;
  vertical-align: middle;
  > p:first-child {
    flex: initial;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 45px;
    text-align: center;
  }
  ${mediaMobile(`
    width: 100%;
    border-left: 0;
    padding-left: 0;
    margin-top: 30px;
    > p:first-child {
      display: none;
    }
  `)}
`;
export const Discount = styled.p`
  margin-top: 20px;
  font-size: 12px;
  line-height: 24px;
  text-align: left;
  ${mediaMobile(`
  display: none;
  `)}

  ${props =>
    props.display === "block" &&
    css`
   ${mediaMobile(`
  display: block;
  `)}
      @media (min-width: ${mediaQueryMobile + 1}px) {
        display: none;
      }
    `}
`;

export const SubtotalWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex: initial;
  & p {
    text-transform: uppercase;
    flex: auto;
    text-align: left;
  }
  & div {
    flex: auto;
    text-align: right;
  }
  ${mediaMobile(`
  display: none;
  `)}
`;

export const GrandTotalWrap = styled.div`
  display: flex;
  margin-top: 19px;
  justify-content: space-between;
  flex: initial;
  padding-top: 21px;
  border-top: 1px solid #a7aabb;
  ${mediaMobile(`
  border-top: 0;
  `)}
  & p {
    text-transform: uppercase;
    flex: auto;
    font-weight: 600;
    text-align: left;
  }
  & div {
    flex: auto;
    font-weight: 600;
    text-align: right;
  }
`;

export const CheckoutWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 31px;
  max-width: 280px;
  width: 100%;
  align-self: center;
  & div {
    margin-bottom: 15px;
  }
  ${mediaMobile(`
  max-width: 750px;
  `)}
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  & div:first-child {
    flex: 3;
    text-align: center;
  }
  & div {
    flex: 1;
    text-align: center;
  }
`;

export const CartWrapper = styled.div`
  display: flex;
  margin-top: 21px;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const Body = styled.div`
  width: 100%;
`;

export const StyledSelect = styled.div`
  border-bottom: 1px solid black;
  width: 31px;
  height: 24px;
  position: relative;
  margin: 0 auto;

  &:after {
    content: "";
    top: 5px;
    right: 4px;
    position: absolute;
    border: solid #262c37;
    border-width: 0 1px 1px 0;
    padding: 4px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    z-index: -1;
  }
  & select {
    border: none;
    box-shadow: none;
    background-color: transparent;
    background-image: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-size: 14px;
    font-family: "Montserrat", system-ui, sans-serif;
    width: 31px;
    height: 24px;
    cursor: pointer;
  }

  & ~ select:focus {
    outline: none;
  }
  & ~ option:focus {
    outline: none;
  }
  ${mediaMobile(`
  &:before {
    content: "Qty";
    margin-left: -30px;
    margin-right: 5px;
    font-size: 14px;
  }
   & select {
   height: 18px;
   font-size: 12px;
   padding-left: 4px;
   }
  `)}
`;
