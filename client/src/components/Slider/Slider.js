import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SampleNextArrow, SamplePrevArrow } from "./Arrows";

import {
  CarouselWrapper,
  CarouselImage,
  SliderPromo,
  SliderPromoMobile,
  SliderPromoText,
  SliderPromoButton,
  H4,
} from "./slider.styles";

export const SliderHomepage = (props) => {
  const settings = {
    slidesToShow: props.show,
    accessibility: true,
    dots: props.dots,
    arrows: true,
    infinite: true,
    draggable: true,
    autoplay: props.auto,
    speed: 500,
    nextArrow: <SampleNextArrow homePage={props.homePage} right={26} />,
    prevArrow: (
      <SamplePrevArrow homePage={props.homePage} left={70} prev={-3} />
    ),
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          nextArrow: <SampleNextArrow homePage={true} right={40} />,
          prevArrow: <SamplePrevArrow homePage={true} left={40} />,
        },
      },
      {
        breakpoint: 798,
        settings: {
          slidesToShow: 1,
          nextArrow: <SampleNextArrow homePage={true} right={40} />,
          prevArrow: <SamplePrevArrow homePage={true} left={40} />,
        },
      },
    ],
  };

  const [slides, setSlides] = useState([]);
  useEffect(() => {
    axios
      .get("/slides")
      .then((result) => {
        setSlides(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const itemsHomePage = slides.slice(0, 3);
  const items = slides.slice(3);

  if (props.homePage === true) {
    return (
      <CarouselWrapper className="carousel_wrapper">
        <Slider {...settings}>
          {itemsHomePage.map((item) => {
            return (
              <div key={item._id}>
                <CarouselImage height={props.height} {...item}>
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
      <div
        style={{
          width: "95%",
          marginLeft: "55px",
          marginTop: "75px",
          marginBottom: "56px",
        }}
      >
        <CarouselWrapper className="carousel_wrapper">
          <H4>{props.h4}</H4>
          <Slider {...settings}>
            {items.map((item) => {
              return (
                <div style={{ boxSizing: "border-box" }} key={item._id}>
                  <CarouselImage
                    height={props.height}
                    width={`${props.width}`}
                    {...item}
                  />
                </div>
              );
            })}
          </Slider>
        </CarouselWrapper>
      </div>
    );
  }
};
