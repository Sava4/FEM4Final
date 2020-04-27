import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
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

export const CartItem = ({ props, handleDel, handleQty }) => {
  const [isMobile, setMobile] = useState({});
  const handleWindowSizeChange = () => {
    setMobile({ width: window.innerWidth });
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
  }, []);
  return window.matchMedia("(min-width: 750px)").matches ||
    isMobile.width > 750 ? (
    <ItemContainer>
      <Wrapper flexDirection={"row"} justifyContent={"space-between"}>
        <ImgWrap to={`/product-details/${props.itemNo}`}>
          <ProdImg alt="" src={`${props.img}`} />
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
          <ProdImg alt="" src={`${props.img}`} />
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

export const StyledSelect = styled.div`
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
  & ~ option:focus {
    outline: none;
  }
`;
