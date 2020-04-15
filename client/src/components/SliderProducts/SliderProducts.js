import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SampleNextArrow, SamplePrevArrow } from "./../Slider/Arrows";
import { H4 } from "./sliderProducts.styles";
import { ProductItem } from "../ProductsList/productItem";

//из строки отлавливаем коллекцию
import { useLocation } from "react-router";

export const SliderProducts = props => {
  console.log("TCL: props", props);

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
    nextArrow: <SampleNextArrow homepage={false} />,
    prevArrow: <SamplePrevArrow homepage={false} prev={-2} />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
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

  let get;
  let page = `filter?perPage=${props.perPage}`;
  let col = `&collection=${props.collection}`;
  // const [ids, setIds] = useState([]);

  if (props.h4 === "RECENTLY VIEWED") {
    let ids2 = localStorage.getItem("recent_ids");
    // console.log("TCL: ids2", ids2);
    let ids3 = ids2.split(",");
    console.log("TCL: ids3 ", ids3);

    get = `http://localhost:5000/products/${ids3[0]}`;

    // ids3.forEach(element=>function() {
    //   get = `http://localhost:5000/products/${element}`;
    //   console.log("TCL:  get",  get)      
    // });

    // get = `http://localhost:5000/products/${page}`;

     console.log("TCL:  get",  get) 

  } else if (props.h4 === "COMPLETE THE SET") {
    get = `http://localhost:5000/products/${page}${col}`; //все категории кроме текущей нельзя?
    
  } else if (props.h4 === "FEATURED") {
    get = `http://localhost:5000/products/filter?perPage=20&collection=First Diamond&categories=rings,earrings,bracelets,necklaces`;
  }

  console.log("TCL: col", get);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(get)
      // .get(`http://localhost:5000/products/`)
      .then(result => {
        //если get содержит filter
        if (get.icludes('?')){
        setProducts(result.data.products);                
        } 
        else{
          setProducts(result.data)
        }
        //если нет  setProducts(result.data)
      })
      .catch(err => {
        // console.log(err);
      });
  }, [get]);
  console.log("TCL: products", products);
  // if (props.reverse === "reverse") {
  // products1 = products.reverse()
  //    }
  let products1 =
    products &&
    products.length &&
    products.map(item => {
      return (
        <ProductItem
          key={item._id}
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
    });

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
      <Slider {...settings}>{products1}</Slider>
    </div>
  );
};
