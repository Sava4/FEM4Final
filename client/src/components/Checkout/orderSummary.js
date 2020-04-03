import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import setAuthorizationToken, { logoutAction } from "../../store/login";
import axios from "axios";
import { setServerCart } from "../../store/shopping-cart";
import { v4 } from "uuid";
import { GiftCardInput } from "./giftCardForm";
import { SummaryWrapper, Header, ProductContainer, Name, Price, Img, ItemContainer, Total, TotalContainer, WrapperLink } from "./checkout.styles";
import styled, { css } from "styled-components";

export const OrderSummary = props => {
  const token = useSelector(state => state.login.token);
  setAuthorizationToken(token);
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [totalPrices, setTotalPrices] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/cart")
      .then(resp => {
        setProducts(resp.data.products);
        const PriceArray = resp.data.products.map(item => {
          parseInt(item);
          return item.cartQuantity * item.product.currentPrice;
        });
        setTotalPrices(
          PriceArray.reduce(function(a, b) {
            return a + b;
          })
        );
        resp.data === null
          ? dispatch(setServerCart([]))
          : dispatch(setServerCart(resp.data.products));
      })
      .catch(err => {
        console.error("Request Error", err);
        dispatch(setServerCart([]));
      })
      .finally(() => setLoading(false));
  }, [token, dispatch]);
  console.log(totalPrices);
  const ListProduct = products.map(item => {
    return (
      <OrderItem
        key={v4()}
        itemNo={item.product.itemNo}
        id={item.id}
        name={item.product.name}
        previousPrice={item.product.currentPrice}
        cartQuantity={item.cartQuantity}
        total={item.cartQuantity * item.product.currentPrice}
        img={item.product.imageUrls[0]}
      />
    );
  });

  return (
    <SummaryWrapper>
      <Header>Order Summary</Header>
      <ProductContainer> {ListProduct} </ProductContainer>
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
        <ItemContainer><Header>Total</Header><Price>{totalPrices.toLocaleString("de-CH")}</Price></ItemContainer>
    </SummaryWrapper>
  );
};

const OrderItem = props => {
  return (
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
  );
};


