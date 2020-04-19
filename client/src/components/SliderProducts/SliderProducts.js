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

export const SliderProducts = (props) => {
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
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 798,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let get;
  let get2;
  let page = `filter?perPage=${props.perPage}`;
  let col = `&collection=${props.collection}`;
  // const [ids, setIds] = useState([]);
  const [products, setProducts] = useState([]);
  const [products2, setProducts2] = useState([]);
  console.log("TCL: SliderProducts -> products2", products2)
  let ids2 = localStorage.getItem("recent_ids");
     

  useEffect(() => {
    if (props.h4 === "RECENTLY VIEWED") {
      
      // массив ссылок на товары поштучно из localstorage
      let ids3 = ids2.split(",");
      console.log("TCL: ids3 ", ids3);

      (ids3 &&
        ids3.length <= 1 &&
        ids3.map((item) => {
          get = `http://localhost:5000/products/filter?perPage=20`;
          console.log("TCL:  get", get);
          axios
            .get(get)
            .then((result) => {
              setProducts(result.data);
            })
            .catch((err) => {
              console.log(err);
            });
          //получаю ссылки но запросы не идут, как выполнить юзеффект для каждой переменной?
        })) ||
        (ids3 &&
          ids3.length > 1 &&
          ids3.map((item) => {
            get2 = `http://localhost:5000/products/${item}`;
            console.log("TCL:  get2", get2);
            // getter(get2)
            //получаю ссылки но запросы не идут, как выполнить юзеффект для каждой переменной?
            axios
              .get(get2)
              .then((result) => {
              // setProducts2(products2.push(result.data)) !!!!!!!!!!! нельзя исп в реакте
              setProducts2((products2) => [... products2, result.data]);
                console.log("TCL: getter -> products2", products2);
              })
              .catch((err) => {
                console.log(err);
              });
          }));

      //  }
    }
    console.log("TCL: getter -> products2", products2);
    return () => {
     console.log("TCL: getter -> products2", products2);
    };
  }, [get2]);
  //работает осталось массив ссылок передать из локал
  // если меньше 5 показывать без слайдера по центру? или показывать featured и вытеснять просмотренными
  useEffect(() => {
    if (props.h4 === "COMPLETE THE SET") {
      get = `http://localhost:5000/products/${page}${col}`; //все категории кроме текущей нельзя?
      axios
        .get(get)
        .then((result) => {
          setProducts(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (props.h4 === "FEATURED") {
      get = `http://localhost:5000/products/filter?perPage=20&collection=First Diamond&categories=rings,earrings,bracelets,necklaces`;
      axios
        .get(get)
        .then((result) => {
          setProducts(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [get]);

  // useEffect(() => {
  //   axios
  //     .get(get)
  //     .then((result) => {
  //       setProducts(result.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [get]);

  // useEffect(() => {
  //   // function getter(){
  //   axios
  //     .get(get2)
  //     .then((result) => {
  //       setProducts2(products2.push(result.data));
  //       console.log("TCL: getter -> products2", products2);

  //       // получили один продукт в виде объекта
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   //  }
  // }, [get2]);

  // if (props.reverse === "reverse") {
  // products1 = products.reverse()
  //    }

  console.log("TCL: SliderProducts -> products", products);
  console.log("TCL: SliderProducts -> products2", products2) 


  let products1;

  if (products2&&products2.length>1) {
    //если в ответе не массив а один объект продукт
    //надо сделать массив
    
    products1 = products2.map((item) => {
        // console.log("TCL: SliderProducts ->  products1",  products1)
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
              justifyContent: "center",
            }}
          />
        );
      });
  } else if (!products.products) {
    //здесь if result.data если запрос без filter?
    products1 =
      products &&
      products.length >0 &&
      products.map((item) => {
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
              justifyContent: "center",
            }}
          />
        );
      });
  } else if (products.products) {
    //здесь if result.data есть внутри объект products эти если запрос с фильтром
    products1 =
      products &&
      products.products.length &&
      products.products.map((item) => {
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
              justifyContent: "center",
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
        marginLeft: `30px`,
      }}
    >
      <H4>{props.h4}</H4>
      <Slider {...settings}>{products1}</Slider>
    </div>
  );
};
