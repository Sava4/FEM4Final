import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavorites, removeFavorites } from "../../store/favorites";
import {
  Heart,
  HeartRose,
  Image,
  Name,
  Price,
  WishWrapper,
} from "../ProductDetails/productDetails.styles";
import { Wrapper, Card } from "./productItem.styles";
export const ProductItem = (props) => {
  const dispatch = useDispatch();
  const isFavorites = useSelector((state) =>
    state.favorites.favArr.some((id) => id === props.id)
  );

  let img1 = props.img[0];
  let img2;
  (props.img.length && (img2 = props.img[1])) || (img2 = img1);

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
        {/* <Image alt="" src={`${props.img}`} size={"small"} />  попробовать поменять внутри src по условию*/}
        <Image
          alt=""
          img1={process.env.PUBLIC_URL + img1}
          img2={process.env.PUBLIC_URL + img2}
          size={"small"}
        />
        <Name size={"small"}>
          {`${props.name}`}
          <p>"{props.collection}"</p>
        </Name>
        <Price size={"small"}>
          {props.previousPrice.toLocaleString("de-CH")}
        </Price>
      </Card>
    </Wrapper>
  );
};
