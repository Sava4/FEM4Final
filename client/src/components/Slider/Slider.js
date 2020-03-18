import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import {
  CarouselImage,
  SliderPromo,
  SliderPromoText,
  SliderPromoButton
} from "./slider.styles";

export const SliderHomepage = () => {
  const settings = {
    accessibility: true,
    dots: true,
    arrows: true,
    infinite: true,
    draggable: true,
    // autoplay: true,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const [text, setText] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/slides")
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
        height: `height: 425px`
      }}
    >
      <Slider {...settings}>
        {text.map(item => {
          return (
            <CarouselImage key={item._id} {...item}>
              <SliderPromo>
                <SliderPromoText>{item.description}</SliderPromoText>
                <SliderPromoButton>
                  <div> SHOP NOW</div>
                </SliderPromoButton>
              </SliderPromo>
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
        width: "25px",
        height: "30px",
        backgroundColor: "white",
        // border: "1px solid grey",
        right: "26%",
        zIndex: "1",
        top: "96.7%"
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
      ></div>
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
        backgroundColor: "white",
        width: "25px",
        height: "30px",
        left: "70%",
        zIndex: "1",
        top: "96.7%"
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
      ></div>
    </div>
  );
}
