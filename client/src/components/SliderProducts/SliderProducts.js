import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { H4 } from "./sliderProducts.styles";
import { ProductItem } from "../ProductsList/productItem";

export const SliderProducts = props => {
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
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 798,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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

  let text1 = text;
  if (props.reverse === "reverse") {
    text1 = text1.reverse();
  }
  return (
    <div
      className="carousel_wrapper"
      style={{
        height: `height: 592px`,
        marginTop: `40px`,
        marginLeft: `30px`
      }}
    >
      <H4>{props.h4}</H4>
      <Slider {...settings}>
        {text1.map(item => {
          return (
            <ProductItem
              {...item}
              interpretation={"carousel"}
              img={item.imageUrls[0]}
              id={item._id}
              itemNo={`${item.itemNo}`}
              style={{
                display: "flex",
                justifyContent: "center"
              }}
            />
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
        right: "0.5%",
        zIndex: "1",
        border: "1px solid #A7AABB",
        width: "25px",
        height: "30px"
        // content: "›"
      }}
      onClick={onClick}
    >
      <div
        style={{
          border: "solid grey",
          borderWidth: "0 1px 1px 0",
          display: "inline-block",
          padding: "7px",
          position: "relative",
          bottom: "12px",
          transform: "rotate(-45deg)"
        }}
      />
    </div>
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
        border: "1px solid #A7AABB",
        width: "25px",
        height: "30px",
        right: "0%",
        zIndex: "1"
      }}
      onClick={onClick}
    >
      <div
        style={{
          border: "solid grey",
          borderWidth: "0 1px 1px 0",
          display: "inline-block",
          padding: "7px",
          position: "relative",
          bottom: "12px",
          left: "8px",
          transform: "rotate(135deg)"
        }}
      />
    </div>
  );
}
