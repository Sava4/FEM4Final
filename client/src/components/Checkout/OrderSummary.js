import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import setAuthorizationToken, { logoutAction } from "../../store/login";
import axios from "axios";
import { setServerCart } from "../../store/shopping-cart";
import { v4 } from "uuid";
import { GiftCardInput } from "./GiftCardForm";
import {
  SummaryWrapper,
  Header,
  ProductContainer,
  Name,
  Price,
  Img,
  ItemContainer,
  Total,
  TotalContainer,
  WrapperLink,
  CheckoutWrapper
} from "./checkout.styles";

export const OrderSummary = props => {
  const { icons, totalPrices } = props;

  return (
    <SummaryWrapper>
      <Header>Order Summary</Header>
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
    </SummaryWrapper>
  );
};

export const OrderItem = props => {
  return (
    <ProductContainer>
      <ItemContainer>
        <TotalContainer>
          <Total>{props.cartQuantity}</Total>
          <WrapperLink to={`/product-details/${props.itemNo}`}>
            <Img src={`/${props.img}`} alt="" />
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
      <Img src={`/${props.img}`} alt="" />
    </WrapperLink>
  );
};
