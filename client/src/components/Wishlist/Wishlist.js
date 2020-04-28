import React, { Fragment, useEffect, useState } from "react";
import { Layout } from "../common/Layout";
import { WishlistItem } from "./wishlistItem";
import styled from "styled-components";
import axios from "axios";
import { v4 } from "uuid";
import { EmptyCart } from "../ShoppingBag/EmptyCart";
import { useSelector } from "react-redux";
import { ArrowImg, Container, Continue } from "../ShoppingBag/ShoppingBag";
import arrow from "../ShoppingBag/arrow.png";
import { useHistory } from "react-router";

export const Wishlist = (props) => {
  const [products, setProducts] = useState([]);
  const history = useHistory();
  const lengthFav = useSelector((state) => state.favorites.favArr.length);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/products");
      setProducts(res.data);
    };
    fetchPosts();
  }, []);
  const ListProduct = products.map((products) => {
    return (
      <WishlistItem
        key={v4()}
        itemNo={products.itemNo}
        img={products.imageUrls[0]}
        id={products._id}
        name={products.name}
        previousPrice={products.previousPrice}
        currentPrice={products.currentPrice}
        collection={products.collection}
      />
    );
  });

  return (
    <Layout>
      <Container>
        <FavoritesWrapper>
          <FavoritesHeader>FAVORITES</FavoritesHeader>
        </FavoritesWrapper>

        <Continue onClick={() => history.push("/")}>
          <ArrowImg src={arrow} />
          Continue Shopping
        </Continue>
        {lengthFav > 0 ? (
          <Fragment>{ListProduct}</Fragment>
        ) : (
          <EmptyCart text={"Yor Wishlist is currently empty."} />
        )}
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
