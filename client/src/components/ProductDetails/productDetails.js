import React, { useState, useEffect, useRef, Fragment } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToLocalCart, addToSrvCart } from "../../store/shopping-cart";
import { addFavorites, removeFavorites } from "../../store/favorites";
import { ShoppingBagForm } from "../Forms/ShoppingBagForm/ShoppingBagForm";
import { useParams } from "react-router";
import { ScrollToTopController, ShowOnTop } from "../SliderProducts/LoadMore";
import Slider from "react-slick";
import { SliderProducts } from "./../SliderProducts/SliderProducts";
import { Spinner } from "../Spinner/Spinner";
import styled, { css } from "styled-components";
import {
  Container,
  Image,
  WishButton,
  WishWrapper,
  Heart,
  HeartRose,
  Price,
  PriceWrapper,
  Wrapper,
  Add,
  Details,
  UL,
  LI,
  Vendor,
  Name
} from "./productDetails.styles";
import ReactImageZoom from "react-image-zoom";

export const ProductDetails = () => {
  const { id } = useParams();
  const [products, setProducts] = useState({});
  const [images, setImages] = useState([]);
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const [ids, setIds] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(`http://localhost:5000/products/${id}`);
      setImages(res.data.imageUrls);
      setProducts(res.data);
      setPrice(res.data.previousPrice.toLocaleString("de-CH"));
      setLoading(false);
      setIds(ids => [...ids, id]);
      localStorage.setItem("recent_ids", ids);
    };
    fetchPosts();
  }, [id]);

  return loading ? (
    <Container>
      <Spinner />
    </Container>
  ) : (
    <Fragment>
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
      />
      <SliderProducts
        h4={"COMPLETE THE SET"}
        reverse={"reverse"}
        collection={products.collection}
        categories={products.categories}
        perPage={24}
      />
      <SliderProducts h4={"RECENTLY VIEWED"} perPage={24} />
      <ScrollToTopController parsed={id} />
      <ShowOnTop />
    </Fragment>
  );
};

const Details1 = props => {
  const [isModalOpen, toggleModal] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector(state => state.login.token);
  const products = props.products;
  const product = products !== undefined && products;
  const images = product.imageUrls !== undefined && product.imageUrls;
  const imagesArr = Array.from(images);
  const avatars = imagesArr.length;

  let imagesSliderPreview = imagesArr.map(image => {
    return (
      <div key={image}>
        <img
          alt=""
          src={`${image}`}
          style={{
            width: "99%",
            border: `1px solid #E9EBF5`,
            boxSizing: "border-box"
          }}
        />
      </div>
    );
  });
  let imagesSlider = imagesArr.map(image => {
    const propsss = {
      zoomPosition: "original",
      width: 600,
      img: `${image}`
    };
    return (
      <div key={image}>
        <ReactImageZoom
          {...propsss}
          style={{
            width: "99%",
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
          width: `5%`,
          marginTop: `20px`,
          marginRight: `5px`,
          cursor: `pointer`
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
          {imagesSliderPreview}
        </Slider>
      </div>

      <div
        className="carousel_wrapper"
        style={{
          height: ``,
          width: `50%`,
          marginTop: `20px`,
          marginRight: `20px`,
          boxSizing: `border-box`,
          cursor: `zoom-in`
        }}
      >
        <Slider
          asNavFor={nav2}
          ref={slider => (slider1.current = slider)}
          speed={0.1}
          arrows={false}
          draggable={false}
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
