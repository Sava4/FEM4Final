import React, {useEffect, useState} from "react";
import { Layout } from "../common/Layout";
import { WishlistItem } from "./wishlistItem";
import { Container } from "../ProductDetails/productDetails";
import styled, { css } from "styled-components";
import axios from "axios";
import {v4} from "uuid";

export const Wishlist = props => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("http://localhost:5000/products");
            setProducts(res.data);
        };
        fetchPosts();
    }, []);
    const ListProduct = products.map(products => {
        return (
            <WishlistItem
        key={v4()}
        itemNo={products.itemNo}
        img={products.imageUrls[0]}
        id={products._id}
        name={products.name}
        previousPrice={products.previousPrice}
        collection={products.collection}
        />
        )
    });
  return (
    <Layout>
      <FavoritesWrapper>
        <FavoritesHeader>FAVORITES</FavoritesHeader>
      </FavoritesWrapper>
      <Container flex={"column"}>
          {ListProduct}
      </Container>
    </Layout>
  );
};

const FavoritesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const FavoritesHeader = styled.h2`
  margin-top: 29px;
  width: max-content;
  font-size: 24px;
  text-transform: uppercase;
`;
