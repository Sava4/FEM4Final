import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import {
  mediaMobile,
  mediaTablet,
  mediaTabletPortrait
} from "../../styled-components/media-breakpoints-mixin";
import styled, { css } from "styled-components";

export const ProductDetails = () => {
  const { id } = useParams();
  const [products, setProducts] = useState({});
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(`http://localhost:5000/products/${id}`);
      setImages(res.data.imageUrls);
      setProducts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  console.log("image", images[0]);
  console.log("продукт", products);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <Details1
      name={products.name}
      itemNo={products.itemNo}
      previousPrice={products.previousPrice}
      gemstone={products.gemstone}
      collection={products.collection}
      metal={products.metal}
      metal_color={products.metal_color}
      weight={products.weight}
      sample={products.sample}
      img={images[0]}
    />
  );
};
const Details1 = props => {
  return (
    <Container>
      <Image alt="" src={`/${props.img}`} />
      <Wrapper>
        <Name line={"true"}>{`${props.name}`}</Name>
        <Vendor>{`Article no.:  ${props.itemNo}`}</Vendor>
        <PriceWrapper>
          <Price>{`${props.previousPrice}`}</Price>
          <WishWrapper>
            <WishButton>Add to wish list</WishButton>
            <Heart>&#9825;</Heart>
          </WishWrapper>
        </PriceWrapper>
        <Add>Add to bag</Add>
        <Details>Details</Details>
        <UL>
          <LI>{`Gemstone: ${props.gemstone}`} </LI>
          <LI>{`Collection: ${props.collection}`}</LI>
          <LI>{`Metal: ${props.metal}`}</LI>
          <LI>{`Metal Color: ${props.metal_color}`}</LI>
          <LI>{`Weight: ${props.weight}`}</LI>
          <LI>{`Sample: ${props.sample}`}</LI>
        </UL>
      </Wrapper>
    </Container>
  );
};

//*** STYLED-COMPONENTS ***//

export const Container = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 15px;
  ${mediaTabletPortrait(`
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`)}
  ${mediaMobile(`
    width: 95%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px 5px;
`)}
  
  ${props =>
    props.flex === "column" &&
    css`
      flex-direction: column;
    `}
`;
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${mediaMobile(`
  width: 95%;
`)}
`;

export const Image = styled.img`

  ${mediaTablet(`
    width: 60%;
`)}
  ${mediaMobile(`
   width: 55%;
`)}

  ${props =>
    props.size === "small" &&
    css`
      width: 206px;
      height: 258px;
      ${mediaTabletPortrait(`
      width: 156px;
      height: 208px;
      `)}
      ${mediaMobile(`
      width: 140px;
      height: 132px;
      `)}
       @media (max-width: 439px) {
      width: 120px;
      height: 112px
  }
    `}
`;
export const Name = styled.p`
  text-transform: uppercase;
  font-size: 30px;
  line-height: 40px;
  width: 100%;
  ${mediaTabletPortrait(`
      font-size: 20px;
      `)}
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
      height: 30%;
      font-size: 16px;
      line-height: 21px;
      text-align: center;
      ${mediaTabletPortrait(`
        box-sizing: border-box;
        font-size: 12px;
      `)}
      ${mediaMobile(`
        box-sizing: border-box;
        font-size: 11px;
        margin-bottom: 5px;
      `)}
    `}
`;
export const Vendor = styled.p`
  margin-top: 25px;
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
  margin-top: 25px;
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
      margin-top: 15px;
      justify-self: flex-end;
      height: 10%;
    `};
  ${mediaMobile(`
        font-size: 14px;
      `)}
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
  text-align: center;
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
  margin-top: 8px;
  margin-left: 8px;
  line-height: 21px;
  &:before {
    content: "•";
    margin-right: 8px;
    margin-left: -8px;
    color: #a7aabb;
  }
`;
