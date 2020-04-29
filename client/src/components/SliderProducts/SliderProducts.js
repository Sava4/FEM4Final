import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SampleNextArrow, SamplePrevArrow } from "./../Slider/Arrows";
import { H4 } from "./sliderProducts.styles";
import { ProductItem } from "../ProductsList/ProductItem";
import { useParams } from "react-router";

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
  let get2;
  let get4;
  let page = `filter?perPage=${props.perPage}`;
  let col = `&collection=${props.collection}`;

  const [products, setProducts] = useState([]);
  const [products2, setProducts2] = useState([]);
  const [products4, setProducts4] = useState([]);
  const [ids, setIds] = useState([]);

  let ids2 = localStorage.getItem("recent_ids");
  let categories2 = [`bracelets`, `rings`, `earrings`, `necklaces`];
  let ids1;
  ids2 && ids2.length && (ids1 = ids2.split(","));
  let ids3 = [...new Set(ids1)]; //remove repeats

  let mounted = true;
  function getSliderProducts(col) {
    // let categories2 = [`bracelets`, `rings`, `earrings`, `necklaces`];
    // let categories3;
    // categories2.length ===4 &&
    //   (categories3 = categories2.filter((word) => word !== props.categories)); //категория приходит поздно не хочет фильтровать
    // categories3 && categories3.length &&(
    let n = 1;
    while (n < 5) {
      n++;
      categories2.map(item => {
        get4 = `/products/filter?startPage=${n}&perPage=1${col}&categories=${item}`;

        axios
          .get(get4)
          .then(result => {
            if (mounted) {
              result.data.products[0] &&
                setProducts4(products4 => [
                  ...products4,
                  result.data.products[0]
                ]);
            }
          })
          .catch(err => {
            console.log(err);
          });
      });
    }
  }

  useEffect(() => {
    if (props.h4 === "COMPLETE THE SET") {
      getSliderProducts(col);
    } else if (props.h4 === "FEATURED") {
      getSliderProducts((col = ""));
    } else if (props.h4 === "RECENTLY VIEWED") {
      ids3 &&
        ids3.length > 0 &&
        ids3.map(item => {
          get2 = `/products/${item}`;
          console.log("TCL:  get2", get2);
          axios
            .get(get2)
            .then(result => {
              if (mounted) {
                setProducts2(products2 => [...products2, result.data]); // setProducts2(products2.push(result.data)) !в реакте
              }
            })
            .catch(err => {
              console.log(err);
            });
        });
      getSliderProducts((col = ""));
    }
    return () => (mounted = false);
  }, [get4]);

  // if (props.reverse === "reverse") {
  // products1 = products.reverse()
  //    }

  let products1;
  let products3;

  if (products2 && products2.length > 1) {
    products2.length > 3 &&
      (products1 = products2.map(item => {
        return (
          <ProductItem
            key={item._id}
            {...item}
            interpretation={"carousel"}
            img={item.imageUrls}
            id={item._id}
            itemNo={`${item.itemNo}`}
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          />
        );
      }));
    products2.length <= 3 &&
      (products3 = products2.map(item => {
        return (
          <ProductItem
            key={item._id}
            {...item}
            interpretation={"carousel"}
            img={item.imageUrls}
            id={item._id}
            itemNo={`${item.itemNo}`}
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          />
        );
      }));
  } else if (products4.length > 3) {
    products1 = products4.map(item => {
      return (
        <ProductItem
          key={item._id}
          {...item}
          interpretation={"carousel"}
          img={item.imageUrls}
          id={item._id}
          itemNo={`${item.itemNo}`}
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        />
      );
    });
    products4.length <= 3 &&
      (products3 = products4.map(item => {
        return (
          <ProductItem
            key={item._id}
            {...item}
            interpretation={"carousel"}
            img={item.imageUrls}
            id={item._id}
            itemNo={`${item.itemNo}`}
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          />
        );
      }));
  } else if (!products.products) {
    //здесь if result.data если запрос без filter?
    products1 =
      products &&
      products.length > 0 &&
      products.map(item => {
        return (
          <ProductItem
            key={item._id}
            {...item}
            interpretation={"carousel"}
            img={item.imageUrls}
            id={item._id}
            itemNo={`${item.itemNo}`}
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          />
        );
      });
  } else if (products.products) {
    //здесь if result.data есть внутри объект products, если запрос с filter?
    products1 =
      products &&
      products.products.length &&
      products.products.map(item => {
        return (
          <ProductItem
            key={item._id}
            {...item}
            interpretation={"carousel"}
            img={item.imageUrls}
            id={item._id}
            itemNo={`${item.itemNo}`}
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          />
        );
      });
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
      {products1 && <Slider {...settings}>{products1}</Slider>}
      {products3 && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          {products3}
        </div>
      )}
    </div>
  );
};
