import React, { useState, useEffect } from "react";
import axios from "axios";
import { ProductItem } from "./productItem";

import styled from "styled-components";
import { v4 } from "uuid";

export const ListProducts = props => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/products");
      setProducts(res.data);
    };
    fetchPosts();
  }, []);

  const ListProduct = products.map(product => {
    return (
      <ProductItem
        key={v4()}
        itemNo={product.itemNo}
        id={product._id}
        img={product.imageUrls[0]}
        name={product.name}
        previousPrice={product.previousPrice}
        collection={product.collection}
      />
    );
  });
  return <Wrapper>{ListProduct.splice(0, 9)}</Wrapper>;
};
//Using splice for products array instead the pagination.

export const ProductsList = () => {
  return <ListProducts />;
};

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
