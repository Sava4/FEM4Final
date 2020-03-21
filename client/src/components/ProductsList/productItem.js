import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {addFavorites, removeFavorites} from "../../store/favorites";
import {
  Heart,
  HeartRose,
  Image,
  Name,
  Price,
  WishWrapper
} from "../ProductDetails/productDetails";
import {
  mediaMobile,
  mediaTablet
} from "../../styled-components/media-breakpoints-mixin";
import styled, { css } from "styled-components";


export const ProductItem = props => {
  const dispatch = useDispatch();
  const isFavorites = useSelector(state =>
    state.favorites.favArr.some(id => id === props.id)
  );
  const clickFavorites = (e, props) => {
    e.preventDefault();
    isFavorites
        ? dispatch(removeFavorites(props.id))
        : dispatch(addFavorites(props.id));
  };

  const FavoriteButton = () => {
    return isFavorites ? (
      <WishWrapper item={true}>
        <HeartRose onclick={clickFavorites}>&#9825;</HeartRose>
      </WishWrapper>
    ) : (
      <WishWrapper item={true}>
        <Heart onclick={clickFavorites}>&#9825;</Heart>
      </WishWrapper>
    );
  };

  return (
    <Wrapper>
      <FavoriteButton />
      <Card
  interpretation={props.interpretation}
  to={`/product-details/${props.itemNo}`}
  key={props.id}
      >
      <Image alt="" src={`/${props.img}`} size={"small"} />
      <Name size={"small"}>{`${props.name}`}</Name>
      <Price size={"small"}>{props.previousPrice}</Price>
    </Card>
    </Wrapper>
  );
};

export const Card = styled(NavLink)`
  display: flex;
  padding-bottom: 3px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 350px;
  text-decoration: none;
  box-sizing: border-box;
  color: #000;
 
`;
const Wrapper = styled.div`
  display: flex;
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
   ${mediaTablet(`

  align-items: space-between;
  width: 43%;
`)}
  ${mediaMobile(`
  width: 43%;
  `)}
`;
