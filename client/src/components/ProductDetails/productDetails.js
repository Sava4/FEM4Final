import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToLocalCart, addToSrvCart } from "../../store/shopping-cart";
import { addFavorites, removeFavorites } from "../../store/favorites";
import { ShoppingBagForm } from "../Forms/ShoppingBagForm/shopping-bag-form";
import { useParams } from "react-router";
import {
  mediaMobile,
  mediaTablet
} from "../../styled-components/media-breakpoints-mixin";
import Slider from "react-slick";

import styled, { css } from "styled-components";

export const ProductDetails = () => {
  const { id } = useParams();
  const [products, setProducts] = useState({});
  const [images, setImages] = useState([]);
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(`http://localhost:5000/products/${id}`);
      setImages(res.data.imageUrls);
      setProducts(res.data);
      setPrice(res.data.previousPrice.toLocaleString("de-CH"));
      setLoading(false);
    };
    fetchPosts();
  }, [id]);

  return (
    <>
      <Details1
        products={products}
        name={products.name}
        itemNo={products.itemNo}
        id={products._id}
        previousPrice={price}
        gemstone={products.gemstone}
        collection={products.collection}
        metal={products.metal}
        metal_color={products.metal_color}
        weight={products.weight}
        sample={products.sample}
        img={images[0]}
      />
    </>
  );
};

const Details1 = props => {
  const [isModalOpen, toggleModal] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector(state => state.login.token);
  const products = props.products;
  const product = products !== undefined && products;
  console.log(products);
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

  const add = () => {
    token
      ? dispatch(addToSrvCart(props.id, token))
      : dispatch(addToLocalCart(props.id));
    toggleModal(!isModalOpen);
  };

  const isFavorites = useSelector(state =>
    state.favorites.favArr.some(id => id === props.id)
  );

  const FavoriteButton = () => {
    return isFavorites ? (
      <WishWrapper>
        <WishButton>Remove from wishlist</WishButton>
        <HeartRose onClick={() => dispatch(removeFavorites(props.id))}>
          &#9825;
        </HeartRose>
      </WishWrapper>
    ) : (
      <WishWrapper>
        <WishButton>Add to wishlist</WishButton>
        <Heart onClick={() => dispatch(addFavorites(props.id))}>&#9825;</Heart>
      </WishWrapper>
    );
  };

  return (
    <Container>
      {isModalOpen && (
        <ShoppingBagForm
          isModalOpen={isModalOpen}
          onClose={() => toggleModal(false)}
        />
      )}

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
        <Name line={"true"}>{`${props.name}`}</Name>
        <Vendor>{`Article no.:  ${props.itemNo}`}</Vendor>
        <PriceWrapper>
          <Price>{props.previousPrice}</Price>
          <FavoriteButton />
        </PriceWrapper>
        <Add onClick={add}>Add to bag</Add>
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
  ${mediaMobile(`
    width: 95%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`)}
  ${props =>
    props.flex === "column" &&
    css`
      flex-direction: column;
    `}
`;
export const Wrapper = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${mediaMobile(`
  width: 95%;
`)}
`;

export const Image = styled.img`

${mediaTablet(`
    width: 70%;
`)}
   ${mediaMobile(`
   width: 60%;
`)}

  ${props =>
    props.size === "small" &&
    css`
      width: 154px;
      height: 193px;
      ${mediaTablet(`
        width: 117px;
        height: 156px;
`)}
      ${mediaMobile(`
         width: 117px;
        height: 156px;
`)}
    `}
    ${props =>
      props.size === "xSmall" &&
      css`
        width: 103px;
        height: 129px;
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
  height: 30px;
  ${props =>
    props.item === true &&
    css`
      z-index: 2;
      padding-right: 3px;
      width: 100%;
      height: auto;
      justify-content: flex-end;
    `}
`;
export const WishButton = styled.span`
  font-size: 14px;
  padding-bottom: 4px;
  padding-right: 3px;
`;
export const Heart = styled.button`
  bottom: -2px;
  background: transparent;
  border: none;
  font-size: 24px;
  color: #262c37;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
export const HeartRose = styled.button`
  bottom: -2px;
  background: transparent;
  border: none;
  font-size: 24px;
  color: #ff8fbc;
  cursor: pointer;
  &:focus {
    outline: none;
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
  cursor: pointer;
  ${props =>
    props.size === "small" &&
    css`
      width: 50px;
    `}
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
