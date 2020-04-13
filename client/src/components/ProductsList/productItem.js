import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavorites, removeFavorites } from "../../store/favorites";
import {
  Heart,
  HeartRose,
  Image,
  Name,
  Price,
  WishWrapper
} from "../ProductDetails/productDetails.styles";
import { Wrapper, Card } from "./productItem.styles";
export const ProductItem = props => {
  const dispatch = useDispatch();
  const isFavorites = useSelector(state =>
    state.favorites.favArr.some(id => id === props.id)
  );

  const FavoriteButton = () => {
    return isFavorites ? (
      <WishWrapper item={true}>
        <HeartRose onClick={() => dispatch(removeFavorites(props.id))}>
          &#9825;
        </HeartRose>
      </WishWrapper>
    ) : (
      <WishWrapper item={true}>
        <Heart onClick={() => dispatch(addFavorites(props.id))}>&#9825;</Heart>
      </WishWrapper>
    );
  };

  return (
    <Wrapper interpretation={props.interpretation}>
      <FavoriteButton />
      <Card to={`/product-details/${props.itemNo}`} key={props.id}>
        <Image alt="" src={`${props.img}`} size={"small"} />
        <Name size={"small"}>{`${props.name}`}</Name>
        <Price size={"small"}>
          {props.previousPrice.toLocaleString("de-CH")}
        </Price>
      </Card>
    </Wrapper>
  );
};
