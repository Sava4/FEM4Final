import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carousel = () => {
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

const SliderPromo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 452px;
  height: 100%;
  margin-left: 130px;
  background: linear-gradient(0deg, #ffffff, #ffffff);
  opacity: 0.9;
`;

const SliderPromoText = styled.div`
  width: 70%;
  background-color: #ffffff;
  opacity: 0.8;
  font-size: 12px;
  font-family: Montserrat, sans-serif;
  color: black;
`;

const SliderPromoButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 275px;
  width: 280px;
  height: 46px;
  background: #ffffff;
  border: 1px solid #262c37;
  box-sizing: border-box;
  text-decoration: none;
  color: black;
  font-size: 14px;
`;
const CarouselImage = styled.div`
  background: url(${props => props.imageUrl}) no-repeat;
  height: 425px;
  opacity: 1;
`;
