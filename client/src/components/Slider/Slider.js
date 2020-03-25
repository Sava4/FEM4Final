import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  CarouselWrapper,
  CarouselImage,
  SliderPromo,
  SliderPromoMobile,
  SliderPromoText,
  SliderPromoButton,
  H4
} from "./slider.styles";

export const SliderHomepage = props => {
  const mediaMatch = window.matchMedia("(max-width: 767px)");
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const onMediaChange = mediaMatchEvent => {
      setMatches(mediaMatchEvent.matches);
    };

    mediaMatch.addListener(onMediaChange);
    return () => {
      mediaMatch.removeListener(onMediaChange);
    };
  });

  const settings = {
    accessibility: true,
    dots: props.dots,
    arrows: matches ? false : true,
    infinite: true,
    centerMode: props.center,
    draggable: true,
    autoplay: props.auto,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const [slides, setSlides] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/slides")
      .then(result => {
        setSlides(result.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const itemsHomePage = slides.slice(0, 3);
  const items = slides.slice(2);

  if (props.homePage == true) {
    return (
      <CarouselWrapper className="carousel_wrapper">
        <Slider {...settings}>
          {itemsHomePage.map(item => {
            return (
              <div key={item._id}>
                <CarouselImage {...item}>
                  <SliderPromo>
                    <SliderPromoText>{item.description}</SliderPromoText>
                    <SliderPromoButton>
                      <div>SHOP NOW</div>
                    </SliderPromoButton>
                  </SliderPromo>
                </CarouselImage>
                <SliderPromoMobile>
                  <SliderPromoText>{item.description}</SliderPromoText>
                  <SliderPromoButton>
                    <div>SHOP NOW</div>
                  </SliderPromoButton>
                </SliderPromoMobile>
              </div>
            );
          })}
        </Slider>
      </CarouselWrapper>
    );
  } else {
    return (
      <CarouselWrapper className="carousel_wrapper">
        <H4>{props.h4}</H4>
        <Slider {...settings}>
          {items.map(item => {
            return <CarouselImage key={item._id} {...item} />;
          })}
        </Slider>
      </CarouselWrapper>
    );
  }
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
