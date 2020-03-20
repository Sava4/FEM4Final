import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Heart,
  HeartRose,
  Image,
  Name,
  Price,
  WishWrapper
} from "../ProductDetails/productDetails";

import styled, { css } from "styled-components";

export const ProductItem = props => {
  const isFavorites = useSelector(state =>
    state.favorites.favArr.some(id => id === props.id)
  );

  const FavoriteButton = () => {
    return isFavorites ? (
      <WishWrapper item={true}>
        <HeartRose>&#9825;</HeartRose>
      </WishWrapper>
    ) : (
      <WishWrapper item={true}>
        <Heart>&#9825;</Heart>
      </WishWrapper>
    );
  };

  return (
    <Card
      interpretation={props.interpretation}
      to={`/product-details/${props.itemNo}`}
      key={props.id}
    >
      <FavoriteButton />
      <Image alt="" src={`/${props.img}`} size={"small"} />
      <Name size={"small"}>{`${props.name}`}</Name>
      <Price size={"small"}>{props.previousPrice}</Price>
    </Card>
  );
};

export const Card = styled(NavLink)`
  display: flex;
  padding-bottom: 3px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 5px;
  width: 32%;
  height: 350px;
  text-decoration: none;
  box-sizing: border-box;
  color: #000;
  border: 1px solid #e9ebf5;
  &: hover {
    border: 1px solid #002d50;
  }
  @media (max-width: 1050px) {
  }
  @media (max-width: 992px) {
    width: 43%;
    align-items: space-between;
  }
  @media (max-width: 767px) {
    align-items: space-between;
    width: 43%;
  }
  @media (max-width: 439px) {
    width: 43%;
  }
`;
