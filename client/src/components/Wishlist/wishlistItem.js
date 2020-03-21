import React from "react";
import {NavLink}  from "react-router-dom";
import close from "../ShoppingBag/modal-close-btn.png";
import {
  ArticleNo,
  CloseImg,
  Description,
  ImgWrap,
  ItemContainer,
  ProdImg,
  ProductDescription,
  RemoveBtn
} from "../ShoppingBag/CartItem";
import styled from 'styled-components'

export const WishlistItem = props => {
  return (
    <ItemContainer>
      <div className="product">
        <WrapperLink to={`/product-details/${props.itemNo}`}>
        <ImgWrap>
          <ProdImg alt="" src={`/${props.img}`}/>
        </ImgWrap>
        </WrapperLink>
        <ProductDescription>
          <Description>{`${props.name}`}</Description>
          <ArticleNo>Article no.: {props.previousPrice}</ArticleNo>
          <RemoveBtn>
            <CloseImg src={close} />
            Remove
          </RemoveBtn>
        </ProductDescription>
      </div>
      <div>{props.previousPrice} UAH</div>
    </ItemContainer>
  );
};

const WrapperLink = styled(NavLink)`

`;
