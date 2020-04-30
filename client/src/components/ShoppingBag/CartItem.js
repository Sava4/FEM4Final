import React, { useEffect, useState } from "react";
import close from "./modal-close-btn.png";
import {
  ArticleNo,
  CloseImg,
  Description,
  ImgWrap,
  ItemContainer,
  Price,
  ProdImg,
  RemoveBtn,
  Wrap,
  Wrapper
} from "../Wishlist/wishlist.style";
import { mediaQueryMobile } from "../../styledComponents/MediaBreakpointsMixin";
import { StyledSelect } from "./shoppingBag.style";

export const CartItem = ({ props, handleDel, handleQty }) => {
  const [isMobile, setMobile] = useState({});
  const handleWindowSizeChange = () => {
    setMobile({ width: window.innerWidth });
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
  }, []);
  return window.matchMedia(`(min-width: ${mediaQueryMobile}px)`).matches ||
    isMobile.width > mediaQueryMobile ? (
    <ItemContainer>
      <Wrapper flexDirection={"row"} justifyContent={"space-between"}>
        <ImgWrap to={`/product-details/${props.itemNo}`}>
          <ProdImg src={process.env.PUBLIC_URL + props.img} />
        </ImgWrap>
        <Wrapper alignItems={"start"} justifyContent={"space-between"}>
          <Description>{props.description}</Description>
          <ArticleNo>Article no.: {props.itemNo}</ArticleNo>
          <Wrap>
            <RemoveBtn onClick={() => handleDel(props.id)}>
              <CloseImg src={close} />
              <span>Remove</span>
            </RemoveBtn>
          </Wrap>
        </Wrapper>
        <Wrapper>
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
        </Wrapper>
        <Wrapper>
          <Price>{props.price.toLocaleString("de-CH")}</Price>
        </Wrapper>
      </Wrapper>
    </ItemContainer>
  ) : (
    <ItemContainer>
      <Wrapper flexDirection={"row"}>
        <ImgWrap to={`/product-details/${props.itemNo}`}>
          <ProdImg src={process.env.PUBLIC_URL + props.img} />
        </ImgWrap>
        <Wrapper height={"188px"} justifyContent={"space-between"}>
          <Wrapper
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"start"}
          >
            <Description>{props.description}</Description>
            <RemoveBtn onClick={() => handleDel(props.id)}>
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
            <Price>{props.price.toLocaleString("de-CH")}</Price>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </ItemContainer>
  );
};
