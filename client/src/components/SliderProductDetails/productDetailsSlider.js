import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Slider from "react-slick";

import styled, { css } from "styled-components";

export const ProductDetailsSlider = props => {
  let { itemNo } = useParams();

  const [productsAllData, setProductsAllData] = useState({});
  //может не вызывать а передавать данные с продукта уже вызваного в слайдер? через пропсы или редакс
  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${itemNo}`)
      .then(res => {
        setProductsAllData(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [itemNo]);

  //при первом проходе переменная undefined
  const product = productsAllData !== undefined && productsAllData;
  console.log(product);
  const images = product.imageUrls !== undefined && product.imageUrls;
  const imagesArr = Array.from(images);
  const avatars = imagesArr.length;

  let imagesSlider = imagesArr.map(image => {
    return (
      <div key={image}>
        <Image
          alt=""
          src={`http://localhost:3000/${image}`}
          style={{
            width: "99%",
            height: "99%",
            border: `1px solid #E9EBF5`,
            boxSizing: "border-box"
          }}
        />
      </div>
    );
  });

  const slider1 = useRef();
  const slider2 = useRef();
  const [state, setState] = useState({ nav1: null, nav2: null });

  useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current
    });
  }, []);
  const { nav1, nav2 } = state;

  return (
    <div>
      <Container>
        <div
          className="carousel_wrapper"
          style={{
            height: ``,
            width: `6%`,
            marginTop: `40px`,
            marginRight: `20px`
          }}
        >
          <Slider
            asNavFor={nav1}
            ref={slider => (slider2.current = slider)}
            slidesToShow={avatars}
            slidesToScroll={1}
            focusOnSelect={true}
            vertical={true}
            style={{ boxSizing: "border-box" }}
          >
            {imagesSlider}
          </Slider>
        </div>
        <div
          className="carousel_wrapper"
          style={{
            height: ``,
            width: `43%`,
            marginTop: `40px`,
            marginRight: `20px`,
            boxSizing: `border-box`
          }}
        >
          <Slider
            asNavFor={nav2}
            ref={slider => (slider1.current = slider)}
            speed={0.1}
            arrows={false}
            draggable={false}
            // fade={true}
          >
            {imagesSlider}
          </Slider>
        </div>

        <Wrapper>
          <Name line={"true"}>{product.name}</Name>
          <Vendor>{`Article no.: ${product.itemNo}`}</Vendor>
          <PriceWrapper>
            <Price>{`${product.currentPrice}`}</Price>
            <WishWrapper>
              <WishButton>Add to wish list</WishButton>
              <Heart>&#9825;</Heart>
            </WishWrapper>
          </PriceWrapper>
          <Add>Add to bag</Add>
          <Details>Details</Details>
          <UL>
            <LI>{`Gemstone: ${product.gemstone}`} </LI>
            <LI>{`Collection: ${product.collection}`}</LI>
            <LI>{`Metal: ${product.metal}`}</LI>
            <LI>{`Metal Color: ${product.metal_color}`}</LI>
            <LI>{`Weight: ${product.weight}`}</LI>
            <LI>{`Sample: ${product.sample}`}</LI>
          </UL>
        </Wrapper>
      </Container>
    </div>
  );
};

//*** STYLED-COMPONENTS ***//

export const Container = styled.div`
  display: flex;
  max-width: 1200px;
  height: 680px;
  padding: 0 15px;
  margin: 0 auto;
  margin-bottom: 20px;

  @media (max-width: 1200px) {
    max-width: 1024px;
  }
  @media (max-width: 1050px) {
    max-width: 991px;
  }
  @media (max-width: 992px) {
    max-width: 768px;
  }
  @media (max-width: 767px) {
    max-width: 540px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  ${props =>
    props.flex === "column" &&
    css`
      flex-direction: column;
    `}
`;
export const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 767px) {
    width: 95%;
  }
`;

export const Image = styled.img`
  display: block;
  object-fit: cover;
  @media (max-width: 992px) {
    width: 520px;
    height: 508px;
  }
  @media (max-width: 767px) {
    width: 360px;
    height: 334px;
  }

  ${props =>
    props.size === "small" &&
    css`
      width: 206px;
      height: 258px;
      @media (max-width: 992px) {
        width: 206px;
        height: 258px;
      }
      @media (max-width: 767px) {
        width: 156px;
        height: 208px;
      }
      @media (max-width: 439px) {
        width: 150px;
        height: 202px;
      }
    `}
`;
export const Name = styled.p`
  text-transform: uppercase;
  font-size: 30px;
  line-height: 40px;
  width: 100%;
  @media (max-width: 992px) {
    font-size: 20px;
  }

  ${props =>
    props.line === "true" &&
    css`
      &:after {
        content: " ";
        display: flex;
        align-self: center;
        margin-top: 11px;
        width: 100%;
        height: 1px;
        background: #3c3b3b;
      }
    `}
  ${props =>
    props.size === "small" &&
    css`
      font-size: 16px;
      line-height: 21px;
      text-align: center;

      @media (max-width: 992px) {
        font-size: 14px;
      }
      @media (max-width: 767px) {
        font-size: 12px;
        margin-bottom: 5px;
      }
    `}
`;
export const Vendor = styled.p`
  font-size: 14px;
  color: #a1a5ad;
`;
export const PriceWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Price = styled.div`
  margin-top: 5px;
  font-size: 16px;
  line-height: 21px;
  &:after {
    content: "UAH";
    margin-left: 5px;
    display: inline;
    font-size: 12px;
  }
  ${props =>
    props.size === "small" &&
    css`
      justify-self: flex-end;
    `};
  @media (max-width: 767px) {
    font-size: 14px;
  }
  @media (max-width: 439px) {
    font-size: 12px;
  }
`;
export const WishWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 135px;
  height: 30px;
`;
export const WishButton = styled.span`
  font-size: 14px;
  padding-bottom: 4px;
`;
export const Heart = styled.button`
  position: relative;
  bottom: -2px;
  background: transparent;
  border: none;
  font-size: 24px;
  color: #262c37;

  &:focus {
    outline: none;
  }
  &:hover {
    font-size: 27px;
  }
`;
export const Add = styled.button`
  margin-top: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  text-transform: uppercase;
  background-color: #002d50;
  border: 1px solid #002d50;
  width: 100%;
  font-size: 12px;
  color: #fff;
`;
export const Details = styled.div`
    text-transform: uppercase;
    font-size: 14px;
    padding-top: 21px;
    width: 100%;
    &:before {
      content: " ";
      display: flex;
      align-self: center;
      margin-bottom: 21px;
      width: 100%;
      height: 1px;
      background: #3c3b3b;
      }
    }
   `;
export const UL = styled.ul`
  align-self: flex-start;
  list-style: none;
`;
export const LI = styled.li`
  text-transform: capitalize;
  &:before {
    margin-right: 7px;
    content: "•";
    color: #a7aabb;
  }
`;
