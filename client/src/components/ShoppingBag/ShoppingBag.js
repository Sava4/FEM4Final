import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Layout } from "../common/Layout";
import axios from "axios";
import styled from "styled-components/macro";
import { setServerCart } from "../../store/shopping-cart";
import { useHistory } from "react-router-dom";
import arrow from "./arrow.png";
import setAuthorizationToken from "../../store/login";
import { logoutAction } from "../../store/login";

import { EmptyCart } from "./EmptyCart";
import { CartItem } from "./CartItem";
import { FormButton } from "../Forms/FormButton/form-button";

export const ShoppingBag = () => {
  const token = useSelector(state => state.login.token);
  setAuthorizationToken(token);
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/cart")
      .then(resp => {
        resp.data === null
          ? dispatch(setServerCart([]))
          : dispatch(setServerCart(resp.data.products));
      })
      .catch(err => {
        console.error("Request Error", err);
        if (err.response.status === 401) {
          dispatch(logoutAction());
          //redirect to login?
        }
        dispatch(setServerCart([]));
      })
      .finally(() => setLoading(false));
  }, [token, dispatch]);

  const cartProps = useSelector(state => {
    return state.shoppingCart.srvCart.map(prod => {
      let {
        cartQuantity: qty,
        product: {
          name: description,
          currentPrice: price,
          itemNo,
          imageUrls: [img],
          _id: id
        }
      } = prod;
      let productTotal = qty * price;
      return {
        id,
        description,
        qty,
        price,
        itemNo,
        img,
        productTotal
      };
    });
  });

  const handleQty = (event, id) => {
    let updateCart = cartProps.map(el => {
      if (el.id === id) {
        el.qty = parseInt(event.target.value);
      }
      return { product: el.id, cartQuantity: el.qty };
    });
    axios
      .put("http://localhost:5000/cart", { products: updateCart })
      .then(resp => {
        dispatch(setServerCart(resp.data.products));
      })
      .catch(err => console.error("Request Error", err));
  };

  const handleDel = id => {
    if (cartProps.length > 1) {
      axios
        .delete(`http://localhost:5000/cart/${id}`)
        .then(resp => {
          dispatch(setServerCart(resp.data.products));
        })
        .catch(err => console.error("Request Error", err));
    } else {
      axios
        .delete("http://localhost:5000/cart/")
        .then(() => {
          dispatch(setServerCart([]));
        })
        .catch(err => console.error("Request Error", err));
    }
  };

  const totalInCart = cartProps.reduce(
    (acc, curr) => acc + curr.productTotal,
    0
  );

  const CartList = props => {
    return (
      <CartWrapper>
        {props.items.map(item => (
          <CartItem
            props={item}
            key={item.id}
            handleDel={handleDel}
            handleQty={handleQty}
          />
        ))}
      </CartWrapper>
    );
  };

  return (
    <Layout>
      <Container>
        <BagHeader>Shopping Bag</BagHeader>
        {cartProps.length > 0 && !loading ? (
          <>
            <Continue onClick={() => history.push("/")}>
              <ArrowImg src={arrow} />
              Continue Shopping
            </Continue>
            <Cart>
              <ProductTable>
                <Header>
                  <div>Product</div>
                  <div>Price</div>
                  <div>Quantity</div>
                  <div>Total</div>
                </Header>
                <Body>
                  <form>
                    <CartList items={cartProps}> </CartList>
                  </form>
                </Body>
              </ProductTable>
              <BagTotals>
                <p>Bag Totals</p>
                <SubtotalWrap>
                  <p>Subtotal</p>
                  <div>{totalInCart.toLocaleString("de-CH")} UAH</div>
                </SubtotalWrap>
                <Discount>
                  Discount and Shipping will be calculated at checkout, where
                  applicable.
                </Discount>
                <GrandTotalWrap>
                  <p>ESTIMATED TOTAL</p>
                  <div>{totalInCart.toLocaleString("de-CH")} UAH</div>
                </GrandTotalWrap>
                <CheckoutWrap onClick={() => history.push("/account/checkout")}>
                  <FormButton value={"CHECKOUT"} />
                </CheckoutWrap>
              </BagTotals>
            </Cart>
          </>
        ) : loading ? (
          <div>...Loading</div>
        ) : (
          <EmptyCart text={"Your Shopping Bag is currently empty."} />
        )}
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  margin: 0 130px 0 149px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const BagHeader = styled.h2`
  margin-top: 29px;
  width: max-content;
  font-size: 24px;
  text-transform: uppercase;
`;

const Continue = styled.div`
  align-self: flex-start;
  margin-top: 33px;
  cursor: pointer;
`;

const ArrowImg = styled.img`
  vertical-align: top;
  height: 14px;
  margin-right: 9px;
`;

const Cart = styled.div`
  display: flex;
  margin-top: 33px;
  align-self: stretch;
`;

const ProductTable = styled.div`
  width: 75%;
  display: flex;
  flex-wrap: wrap;
  padding-right: 57px;
`;
const BagTotals = styled.div`
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
`;
const Discount = styled.p`
  margin-top: 20px;
  font-size: 12px;
  line-height: 24px;
  text-align: left;
`;

const SubtotalWrap = styled.div`
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
`;

const GrandTotalWrap = styled.div`
  display: flex;
  margin-top: 19px;
  justify-content: space-between;
  flex: initial;
  padding-top: 21px;
  border-top: 1px solid #a7aabb;
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

const CheckoutWrap = styled.div`
  margin-top: 31px;
  max-width: 280px;
  width: 100%;
  align-self: center;
`;

const Header = styled.div`
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

const CartWrapper = styled.div`
  display: flex;
  margin-top: 21px;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const Body = styled.div`
  width: 100%;
`;
