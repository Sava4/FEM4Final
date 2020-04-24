import React, { Fragment, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import close from "../ShoppingBag/modal-close-btn.png";
import { ArticleNo } from "../ShoppingBag/CartItem";
import { mediaMobile } from "../../styledComponents/MediaBreakpointsMixin";
import bug from "../common/Header/ShoppingBag/shoppingBagIcon.png";

import styled, { css } from "styled-components";
import { addToLocalCart, addToSrvCart } from "../../store/shopping-cart";
import { removeFavorites } from "../../store/favorites";
import { ShoppingBagForm } from "../Forms/ShoppingBagForm/ShoppingBagForm";
import { Container } from "../ProductDetails/productDetails.styles";

export const WishlistItem = props => {
  const handleWindowSizeChange = () => {
    setMobile({ width: window.innerWidth });
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
  }, []);
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
              <ArticleNo>Article no.: {props.previousPrice}</ArticleNo>
              <Wrap>
                <RemoveBtn onClick={() => dispatch(removeFavorites(props.id))}>
                  <CloseImg src={close} />
                  <span>Remove</span>
                </RemoveBtn>
              </Wrap>
            </Wrapper>
            <Wrapper justifySelf={"flex-end"} width={"20%"}>
              <div>{props.previousPrice.toLocaleString("de-CH")} UAH</div>
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

const ItemContainer = styled.div`
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 230px;
  padding: 21px 0;
  border-bottom: 1px solid #a7aabb;
  &:first-child {
    border-top: 1px solid #a7aabb;
  }
`;
const Wrap = styled.div`
  margin-top: 20px;
`;
const Wrapper = styled.div.attrs(props => ({
  height: props.height || "auto",
  width: props.width || "100%",
  flexDirection: props.flexDirection || "column",
  alignItems: props.alignItems || "center",
  alignSelf: props.alignSelf || "auto",
  justifySelf: props.justifySelf || "auto",
  justifyContent: props.justifyContent || "flex-start"
}))`
  display: flex;
  width: ${props => props.width};
  height: ${props => props.height};
  flex-direction: ${props => props.flexDirection};
  align-items: ${props => props.alignItems};
  align-self: ${props => props.alignSelf};
  justify-self: ${props => props.justifySelf};
  justify-content: ${props => props.justifyContent};
`;
const ImgWrap = styled(NavLink)`
  height: 188px;
  width: 180px;
  margin-right: 20px;
  border: 1px solid #e9ebf5;
  &: hover {
    border: 1px solid #002d50;
  }
`;
export const Price = styled.div`
  font-size: 16px;
  line-height: 21px;
  padding-top: 10px;
  &:after {
    content: "UAH";
    margin-left: 5px;
    display: inline;
    font-size: 12px;
  }
  @media (max-width: 767px) {
    font-size: 14px;
  }
  @media (max-width: 439px) {
    font-size: 12px;
  }
`;
const ProdImg = styled.img`
  height: 186px;
  width: 178px;
  object-fit: contain;
`;
const ShoppingBagIcon = styled.button`
  width: 20px;
  height: 20px;
  margin-left: -30px;
  margin-top: 5px;
  background-image: url(${bug});
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
  &: after {
    content: "Add";
    color: #a1a5ad;
    font-size: 12px;
    position: absolute;
    margin-top: -3px;
    padding-left: 20px;
  }
  ${props =>
    props.left === "true" &&
    css`
      margin-left: 0;
    `}
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
export const RemoveBtn = styled.div`
  line-height: 10px;
  text-decoration-line: underline;
  cursor: pointer;
  & span {
    margin-left: 10px;
  }
`;

export const CloseImg = styled.img`
  margin: 3px;
  height: 14px;
  width: 14px;
  vertical-align: middle;
`;
