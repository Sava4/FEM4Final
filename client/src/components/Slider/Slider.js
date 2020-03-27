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
    slidesToShow: props.show,   
    accessibility: true,
    dots: props.dots,
    arrows: matches ? false : true,
    infinite: true,
    draggable: true,
    autoplay: props.auto,
    speed: 500,
    nextArrow: <SampleNextArrow homePage={props.homePage}/>,
    prevArrow: <SamplePrevArrow homePage={props.homePage}/>,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: props.showMedia,
          slidesToScroll: 1,
          infinite: true,
          dots: props.dots
        }
      },
      {
        breakpoint: 798,
        settings: {
          slidesToShow: 1
        }
      }
    ]
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
  const items = slides.slice(3);

  if (props.homePage == true) {
    return (
      <CarouselWrapper className="carousel_wrapper">
        <Slider {...settings}>
          {itemsHomePage.map(item => {
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
          marginBottom: "56px"
        }}
      >
        <CarouselWrapper className="carousel_wrapper">
          <H4>{props.h4}</H4>
          <Slider {...settings}>
            {items.map(item => {
              return (
                <div style={{ boxSizing: "border-box" }}>
                  <CarouselImage
                    height={props.height}
                    width={props.width}
                    key={item._id}
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

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  if (props.homePage == true) {
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          width: "25px",
          height: "30px",
          backgroundColor: "white",
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
  } else {
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          right: "0.5%",
          zIndex: "1",
          backgroundColor: "white",
          border: "1px solid rgb(233,235,245)",
          width: "25px",
          height: "30px"
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
            right:"0.5%",
            bottom: "13px",
            transform: "rotate(-45deg)"
          }}
        />
      </div>
    );
  }
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  if (props.homePage == true) {
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
            left:"8px" ,          
            transform: "rotate(135deg)"
          }}
        />
      </div>
    );
  } else {
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          border: "1px solid rgb(233,235,245)",
          backgroundColor: "white",        
          width: "25px",
          height: "30px",
        left:"-3%",
        top: "50%",
        bottom: "10px",
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
            bottom: "13px",
            left: "8px",
            transform: "rotate(135deg)"
          }}
        />
      </div>
    );
  }
}
