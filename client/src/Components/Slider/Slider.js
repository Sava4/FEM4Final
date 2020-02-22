import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
    // centerMode: true,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const [text, setText] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/slides")
      .then(res => {
        return res.json();
      })
      .then(json => {
        setText(json);
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
            <div key={item._id}>
              <CarouselImage {...item}>
                <SliderPromo>
                  <SliderPromoText>
                    {item.description}
                    {console.log(item.description)}
                  </SliderPromoText>
                  <SliderPromoButton>
                    <div> SHOP NOW</div>
                  </SliderPromoButton>
                </SliderPromo>
              </CarouselImage>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div>
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "transparent",
          right: "25.4%",
          zIndex: "1",
          top: "96.7%",
          after: { content: "›" }
        }}
        onClick={onClick}
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
        background: "transparent",
        left: "70%",
        zIndex: "1",
        top: "96.7%"
      }}
      onClick={onClick}
    />
  );
}
