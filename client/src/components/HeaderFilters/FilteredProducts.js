import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { v4 } from "uuid";
import querystring from "querystring";
import { ProductItem } from "../ProductsList/productItem";

import styled from "styled-components";

const MapStateToProps = store => ({
  filters: store.filters.selFilters
});
export const FilteredListProducts = connect(MapStateToProps)(props => {
  const [products, setProducts] = useState([]);
  const { category } = props;

  //   props.filters && ( const queryString = ()=>{
  const queryString = [];
  for (let key in props.filters) {
    //   const [key] =

    props.filters[key].length &&
      queryString.push(`${key}=${props.filters[key].join(",")}`);
  }
  //   console.log(queryString)
  const query = querystring.stringify(props.filters);
  // console.log(query)

  useEffect(() => {
    const queryString = [];
    for (let key in props.filters) {
      // const url = `http://localhost:5000/products/filter?categories=${category}&${queryString.join("&")}`;
      // console.log(url)
      props.filters[key].length
        ? queryString.push(`${key}=${props.filters[key].join()}`)
        : axios
            .get(
              `http://localhost:5000/products/filter?categories=${category}&${query}`
              // `http://localhost:5000/products/filter?categories=${category}&gemstone_color=violet`
            )
            .then(result => {
              console.log(result.data);
              setProducts(result.data);
            });
      //   .catch(err => {
      //     /*Do something with error, e.g. show error to user*/
      //   });
    }
    // console.log(queryString.join("&"));
    // console.log(`${category}&${queryString.join("&")}`);
    // console.log(
    //   `http://localhost:5000/products/filter?categories=${category}&${queryString.join("&")}`
    // );
  }, [category, props.filters]);

  const filterdProd = products.products;

  const ListProduct =
    filterdProd &&
    filterdProd.map(product => {
      return (
        <ProductItem
          id={product.itemNo}
          key={v4()}
          img={product.imageUrls[0]}
          name={product.name}
          previousPrice={product.previousPrice}
          collection={product.collection}
        />
      );
    });
  return <Wrapper>{ListProduct && ListProduct.splice(0, 9)}</Wrapper>;
  // };
  //Using splice for products array instead the pagination.

  // export const ProductsList = () => {
  //   return null
  //   <ListProducts />;
});

//*** STYLED-COMPONENTS ***//

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
  margin: 0 auto;
  max-width: 920px;
  width: 80%;
  @media (max-width: 1050px) {
    max-width: 800px;
  }
  @media (max-width: 992px) {
    max-width: 600px;
  }
  @media (max-width: 767px) {
    max-width: 500px;
  }
`;
