import React, { Fragment } from "react";

import { GiftCardInput } from "./GiftCardForm";
import {
  Header,
  ProductContainer,
  Name,
  Price,
  Img,
  ItemContainer,
  Total,
  TotalContainer,
  WrapperLink
} from "./checkout.styles";

export const OrderSummary = props => {
  const { icons, totalPrices, mobile } = props;

  return (
    <Fragment>
      <Header mobile={mobile}>Order Summary</Header>
      <ProductContainer> {icons} </ProductContainer>
      <GiftCardInput />
      <ProductContainer>
        <ItemContainer height={"auto"}>
          <div>Subtotal</div>
          <Price>{totalPrices.toLocaleString("de-CH")}</Price>
        </ItemContainer>
        <ItemContainer height={"auto"}>
          <div>Shipping & Handling</div>
          <Price>0</Price>
        </ItemContainer>
      </ProductContainer>
      <ItemContainer>
        <Header>Total</Header>
        <Price>{totalPrices.toLocaleString("de-CH")}</Price>
      </ItemContainer>
    </Fragment>
  );
};

export const OrderItem = props => {
  return (
    <ProductContainer>
      <ItemContainer>
        <TotalContainer>
          <Total>{props.cartQuantity}</Total>
          <WrapperLink to={`/product-details/${props.itemNo}`}>
            <Img src={process.env.PUBLIC_URL + props.img} alt="" />
          </WrapperLink>
        </TotalContainer>
        <Name>{props.name}</Name>
        <Price>{props.total.toLocaleString("de-CH")}</Price>
      </ItemContainer>
    </ProductContainer>
  );
};
export const OrderIcon = props => {
  return (
    <WrapperLink to={`/product-details/${props.itemNo}`}>
      <Img src={process.env.PUBLIC_URL + props.img} alt="" />
    </WrapperLink>
  );
};
