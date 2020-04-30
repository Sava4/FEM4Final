import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Layout } from "../common/Layout";
import axios from "axios";
import { setServerCart } from "../../store/shopping-cart";
import { useHistory } from "react-router-dom";
import arrow from "./arrow.png";
import { setAuthorizationToken } from "../../store/login";
import { logoutAction } from "../../store/login";
import { EmptyCart } from "./EmptyCart";
import { CartItem } from "./CartItem";
import { Button } from "../common/Button/Button";
import { PageHeader } from "../common/PageHeader/PageHeader";
import { Spinner } from "../Spinner/Spinner";

import { mediaQueryMobile } from "../../styledComponents/MediaBreakpointsMixin";
import {
  ArrowImg,
  BagTotals,
  Body,
  Cart,
  CartWrapper,
  CheckoutWrap,
  Container,
  Continue,
  Discount,
  GrandTotalWrap,
  Header,
  ProductTable,
  SubtotalWrap
} from "./shoppingBag.style";

export const ShoppingBag = () => {
  const token = useSelector(state => state.login.token);
  setAuthorizationToken(token);
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [isMobile, setMobile] = useState({});
  const handleWindowSizeChange = () => {
    setMobile({ width: window.innerWidth });
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
  }, []);
  useEffect(() => {
    setLoading(true);
    axios
      .get("/cart")
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
      .put("/cart", { products: updateCart })
      .then(resp => {
        dispatch(setServerCart(resp.data.products));
      })
      .catch(err => console.error("Request Error", err));
  };

  const handleDel = id => {
    if (cartProps.length > 1) {
      axios
        .delete(`/cart/${id}`)
        .then(resp => {
          dispatch(setServerCart(resp.data.products));
        })
        .catch(err => console.error("Request Error", err));
    } else {
      axios
        .delete("/cart/")
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
        <PageHeader>Shopping Bag</PageHeader>
        {cartProps.length > 0 && !loading ? (
          <>
            {window.matchMedia(`(min-width: ${mediaQueryMobile}px)`).matches ||
            isMobile.width > mediaQueryMobile ? (
              <Continue onClick={() => history.push("/")}>
                <ArrowImg src={arrow} />
                Continue Shopping
              </Continue>
            ) : null}
            <Cart>
              <ProductTable>
                {window.matchMedia(`(min-width: ${mediaQueryMobile}px)`)
                  .matches || isMobile.width > mediaQueryMobile ? (
                  <Header>
                    <div>Product</div>
                    <div>Price</div>
                    <div>Quantity</div>
                    <div>Total</div>
                  </Header>
                ) : null}
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
                <Discount display={"block"}>
                  Discount and Shipping will be calculated at checkout, where
                  applicable.
                </Discount>
                <CheckoutWrap onClick={() => history.push("/account/checkout")}>
                  <Button width={"100%"} value={"CHECKOUT"} />
                  {window.matchMedia(`(max-width: ${mediaQueryMobile}px)`)
                    .matches || isMobile.width < mediaQueryMobile ? (
                    <Button
                      secondary
                      width={"100%"}
                      value={"GO BACK TO SHOPPING"}
                    />
                  ) : null}
                </CheckoutWrap>
              </BagTotals>
            </Cart>
          </>
        ) : loading ? (
          <Spinner />
        ) : (
          <EmptyCart text={"Your Shopping Bag is currently empty."} />
        )}
      </Container>
    </Layout>
  );
};
