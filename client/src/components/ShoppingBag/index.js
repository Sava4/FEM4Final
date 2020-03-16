import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Layout } from "../common/Layout";
import axios from "axios";
import styled from "styled-components/macro";
import { setServerCart } from "../../store/shopping-cart";
import { useHistory } from "react-router-dom";
import arrow from "./arrow.png";
import close from "./modal-close-btn.png";
import diamond from "./diamond.png";
import { FormButton } from "../Forms/FormButton/form-button";
import setAuthorizationToken from "../../store/login";
import { logoutAction } from "../../store/login";

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

  const CartItem = ({ props }) => {
    return (
      <ItemContainer>
        <div className="product">
          <ImgWrap>
            <ProdImg src={`../${props.img}`} />
          </ImgWrap>
          <ProductDescription>
            <Description>{props.description}</Description>
            <ArticleNo>Article no.: {props.itemNo}</ArticleNo>
            <RemoveBtn onClick={() => handleDel(props.id)}>
              <CloseImg src={close} />
              Remove
            </RemoveBtn>
          </ProductDescription>
        </div>
        <div>{props.price.toLocaleString("de-CH")} UAH</div>
        <div>
          <StyledSelect>
            <select
              defaultValue={props.qty}
              onChange={event => handleQty(event, props.id)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </StyledSelect>
        </div>
        <div>{props.productTotal.toLocaleString("de-CH")} UAH</div>
      </ItemContainer>
    );
  };
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

  const EmptyCart = () => {
    return (
      <>
        <DiamondImg src={diamond} />
        <Text>Your Shopping Bag is currently empty.</Text>
        <FormButtonWrap onClick={() => history.push("/products")}>
          <FormButton value={"Go Back To Shopping"} />
        </FormButtonWrap>
      </>
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
          <EmptyCart />
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
  font-family: "Montserrat", system-ui, sans-serif;
  text-transform: uppercase;
`;

const Continue = styled.div`
  align-self: flex-start;
  margin-top: 33px;
  font-family: "Montserrat", system-ui, sans-serif;
  font-size: 14px;
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

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 230px;
  padding: 21px 0 21px 0;
  border-bottom: 1px solid #a7aabb;
  &:first-child {
    border-top: 1px solid #a7aabb;
  }
  & .product {
    display: flex;
    flex: 3;
    text-align: left;
    align-items: center;
  }

  & > div {
    flex: 1;
    text-align: center;
  }
`;

const ProdImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

const ImgWrap = styled.div`
  flex: 1;
  height: 188px;
  margin-right: 20px;
  border: 1px solid #e9ebf5;
`;

const ProductDescription = styled.div`
  flex: 50%;
  height: 135px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const Description = styled.p`
  text-transform: uppercase;
  line-height: 24px;
  width: 75%;
  margin-bottom: 12px;
  flex: 1;
`;

const ArticleNo = styled.p`
  line-height: 10px;
  color: #a1a5ad;
  flex: 1;
`;
const RemoveBtn = styled.div`
  line-height: 10px;
  text-decoration-line: underline;
  flex: 1;
  cursor: pointer;
`;

const CloseImg = styled.img`
  height: 14px;
  width: 14px;
  margin-right: 12px;
  vertical-align: middle;
`;

const DiamondImg = styled.img`
  height: 183px;
  width: 175px;
  margin: 31px 0 38px;
`;

const Text = styled.p`
  text-transform: uppercase;
  font-size: 14px;
  line-height: 19px;
  margin-bottom: 44px;
  width: max-content;
`;

const FormButtonWrap = styled.div`
  width: 380px;
  margin-bottom: 90px;
`;

const Body = styled.div`
  width: 100%;
`;

const StyledSelect = styled.div`
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
`;
