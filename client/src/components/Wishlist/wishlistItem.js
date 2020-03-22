import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import close from "../ShoppingBag/modal-close-btn.png";
import {
  ArticleNo,
  CloseImg,
  ImgWrap,
  ItemContainer,
  ProdImg,
  ProductDescription,
  RemoveBtn
} from "../ShoppingBag/CartItem";
import { mediaMobile } from "../../styled-components/media-breakpoints-mixin";
import bug from "../common/Header/ShoppingBag/shopping-bag.png";

import styled from "styled-components";
import { addToLocalCart, addToSrvCart } from "../../store/shopping-cart";
import { removeFavorites } from "../../store/favorites";

export const WishlistItem = props => {
  const dispatch = useDispatch();
  const isFavorites = useSelector(state =>
    state.favorites.favArr.some(id => id === props.id)
  );
  const token = useSelector(state => state.login.token);
  const add = () => {
    token
      ? dispatch(addToSrvCart(props.id, token))
      : dispatch(addToLocalCart(props.id));
  };
  const CardFavorite = () => {
    return isFavorites ? (
      <ItemContainer>
        <div className="product">
          <WrapperLink to={`/product-details/${props.itemNo}`}>
            <ImgWrap>
              <ProdImg alt="" src={`/${props.img}`} />
            </ImgWrap>
          </WrapperLink>
          <ProductDescription>
            <Description>{`${props.name}`}</Description>
            <ArticleNo>Article no.: {props.previousPrice}</ArticleNo>
            <RemoveBtn onClick={() => dispatch(removeFavorites(props.id))}>
              <CloseImg src={close} />
              Remove
            </RemoveBtn>
          </ProductDescription>
        </div>
        <Wrapper>
          <div>{props.previousPrice.toLocaleString("de-CH")} UAH</div>
          <ShoppingBagIcon onClick={add} />
        </Wrapper>
      </ItemContainer>
    ) : null;
  };
  return <CardFavorite />;
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ShoppingBagIcon = styled.button`
  width: 20px;
  height: 20px;
  margin-left: -65px;
  margin-top: 5px;
  background-image: url(${bug});
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
  &: after {
    content: "Add to bag";
    color: #a1a5ad;
    font-size: 12px;
    position: absolute;
    margin-top: -4px;
    padding-left: 10px;
  }
`;
const WrapperLink = styled(NavLink)``;
const Description = styled.p`
  text-transform: uppercase;
  line-height: 24px;
  width: 75%;
  margin-bottom: 12px;
  flex: 1;
  ${mediaMobile(`
  width:100%;
  font-size: 12px;
  `)}
`;
