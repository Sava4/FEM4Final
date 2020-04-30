import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import close from "../ShoppingBag/modal-close-btn.png";
import { addToLocalCart, addToSrvCart } from "../../store/shopping-cart";
import { removeFavorites } from "../../store/favorites";
import { ShoppingBagForm } from "../Forms/ShoppingBagForm/ShoppingBagForm";
import {
  ArticleNo,
  CloseImg,
  Description,
  ImgWrap,
  ItemContainer,
  Price,
  ProdImg,
  RemoveBtn,
  ShoppingBagIcon,
  Wrap,
  Wrapper
} from "./wishlist.style";

export const WishlistItem = props => {
  const dispatch = useDispatch();
  const [isMobile, setMobile] = useState({});
  const [isModalOpen, toggleModal] = useState(false);
  const isFavorites = useSelector(state =>
    state.favorites.favArr.some(id => id === props.id)
  );
  const token = useSelector(state => state.login.token);
  const add = () => {
    token
      ? dispatch(addToSrvCart(props.id, token))
      : dispatch(addToLocalCart(props.id));
    toggleModal(!isModalOpen);
  };
  const handleWindowSizeChange = () => {
    setMobile({ width: window.innerWidth });
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
  }, []);
  return isFavorites ? (
    window.matchMedia("(min-width: 750px)").matches || isMobile.width > 750 ? (
      <Fragment>
        {isModalOpen && (
          <ShoppingBagForm
            isModalOpen={isModalOpen}
            onClose={() => toggleModal(false)}
          />
        )}
        <ItemContainer>
          <Wrapper flexDirection={"row"} justifyContent={"space-between"}>
            <ImgWrap to={`/product-details/${props.itemNo}`}>
              <ProdImg alt="" src={`${props.img}`} />
            </ImgWrap>
            <Wrapper alignItems={"start"} justifyContent={"space-between"}>
              <Description>{`${props.name}`}</Description>
              <ArticleNo>Article no.: {props.itemNo}</ArticleNo>
              <Wrap>
                <RemoveBtn onClick={() => dispatch(removeFavorites(props.id))}>
                  <CloseImg src={close} />
                  <span>Remove</span>
                </RemoveBtn>
              </Wrap>
            </Wrapper>
            <Wrapper justifySelf={"flex-end"} width={"20%"}>
              <Price>{props.previousPrice.toLocaleString("de-CH")}</Price>
              <ShoppingBagIcon onClick={add} />
            </Wrapper>
          </Wrapper>
        </ItemContainer>
      </Fragment>
    ) : (
      <Fragment>
        {isModalOpen && (
          <ShoppingBagForm
            isModalOpen={isModalOpen}
            onClose={() => toggleModal(false)}
          />
        )}
        <ItemContainer>
          <Wrapper flexDirection={"row"}>
            <ImgWrap to={`/product-details/${props.itemNo}`}>
              <ProdImg alt="" src={`${props.img}`} />
            </ImgWrap>
            <Wrapper height={"188px"} justifyContent={"space-between"}>
              <Wrapper
                flexDirection={"row"}
                justifyContent={"space-between"}
                alignItems={"start"}
              >
                <Description>{`${props.name}`}</Description>
                <RemoveBtn onClick={() => dispatch(removeFavorites(props.id))}>
                  <CloseImg src={close} />
                </RemoveBtn>
              </Wrapper>
              <Wrapper alignItems={"start"}>
                {" "}
                <ArticleNo>Article no.: {props.previousPrice}</ArticleNo>
              </Wrapper>
              <Wrapper
                flexDirection={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <ShoppingBagIcon left={"true"} onClick={add} />
                <Price>{props.previousPrice.toLocaleString("de-CH")}</Price>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </ItemContainer>
      </Fragment>
    )
  ) : null;
};
