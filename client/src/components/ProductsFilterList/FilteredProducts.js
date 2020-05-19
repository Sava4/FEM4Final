import React, { useState, useEffect, useLayoutEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { v4 } from "uuid";
import querystring from "query-string";
import { ProductItem } from "../ProductsList/ProductItem";
// import { mediaMobile } from "../../styledComponents/GlobalStyle";
import { dispatchSetCheckFilter } from "../../store/filters";

import styled from "styled-components";

const MapStateToProps = store => ({
  filters: store.filters.selFilters,
  priceFilters: store.filters.priceRange
});

export const FilteredListProducts = connect(MapStateToProps, {
  dispatchSetCheckFilter
})(props => {
  const [products, setProducts] = useState([]);
  const [queryCategory, setQueryCategory] = useState("");
  // const [clickedCollection, setClickedCollection]= useState([]);
  const { category, setNambertOfFilteredItems } = props;
  console.log(category);
  //Часть по унификации
  useLayoutEffect(() => {
    let typesAll = [];
    const url = `/products`;
    axios.get(url).then(result => {
      result.data.forEach(item => typesAll.push(item.categories));
      const unification = () => Array.from(new Set(typesAll));
      // console.log(result.data);
      const filterCheck = categoryName => {
        //  console.log(availableCategories.filter(it => it===categoryName))
        if (
          unification().filter(it => it === categoryName.toLowerCase()).length
        ) {
          console.log("категория из вариантов");
          setQueryCategory(`categories=${categoryName}&`);
        } else {
          console.log("Коллекции");
          props.dispatchSetCheckFilter({ collection: categoryName });
          setQueryCategory("");
        }
      };

      filterCheck(category);
    });
  }, [category]);

  const query = querystring.stringify(props.filters, { arrayFormat: "comma" });

  const sort = `${query ? "&" : ""}minPrice=${
    props.priceFilters.lowPriсe
  }&maxPrice=${props.priceFilters.hightPrice}&sort=+currentPrice`;

  useEffect(() => {
    const filterUrl = `/products/filter?${queryCategory}&${query}${sort}`;
    console.log(filterUrl);
    axios.get(filterUrl).then(result => {
      console.log(result.data)
      setProducts(result.data);
    });
    //   .catch(err => {
    //     /*Do something with error, e.g. show error to user*/
    //   });
    // }
  }, [query, sort, queryCategory]);

  const filteredProd = products.products;
  // filteredProd && setNambertOfFilteredItems(filteredProd.length);
  const ListProduct =
    filteredProd &&
    filteredProd.map(product => {
      return (
        <ProductItem
          id={product._id}
          itemNo={product.itemNo}
          key={v4()}
          img={product.imageUrls[0]}
          name={product.name}
          previousPrice={product.previousPrice}
          collection={product.collection}
        />
      );
    });
  return <Wrapper>{ListProduct && ListProduct.splice(0, 16)}</Wrapper>;
});

//*** STYLED-COMPONENTS ***//

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
  margin: 0 auto;
  max-width: inherit;
  // width: 80%;
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
