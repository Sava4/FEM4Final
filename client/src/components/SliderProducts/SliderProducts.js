import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselImage } from "./sliderProducts.styles";
import { ProductItem } from "./productItemSlider";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SliderProducts = () => {
  const settings = {
    accessibility: true,
    arrows: true,
    infinite: true,
    draggable: true,
    swipeToSlide: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const [text, setText] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then(result => {
        setText(result.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div
      className="carousel_wrapper"
      style={{
        height: `height: 592px`,
        marginTop: `40px`
      }}
    >
      <Slider {...settings}>
        {text.map(item => {
          return (
            <CarouselImage key={item._id} itemNo={`${item.itemNo}`}>
              <NavLink to={`/product/${item.itemNo}`}>
                <ProductItem
                  {...item}
                  itemNo={`${item.itemNo}`}
                  style={{
                    display: "flex",
                    justifyContent: "center"
                  }}
                ></ProductItem>
              </NavLink>
            </CarouselImage>
          );
        })}
      </Slider>
    </div>
  );
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "grey",
        right: "0.5%",
        zIndex: "1",
        content: "›"
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "grey",
        left: "0.5%",
        zIndex: "1"
      }}
      onClick={onClick}
    />
  );
}
