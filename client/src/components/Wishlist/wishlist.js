import React, { useEffect, useState } from "react";
import { Layout } from "../common/Layout";
import { WishlistItem } from "./wishlistItem";
import styled, { css } from "styled-components";
import axios from "axios";
import { v4 } from "uuid";
import { EmptyCart } from "../ShoppingBag/EmptyCart";
import { useSelector } from "react-redux";

export const Wishlist = props => {
  const [products, setProducts] = useState([]);
  const lengthFav = useSelector(state => state.favorites.favArr.length);
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
    );
  });

  return (
    <Layout>
      <FavoritesWrapper>
        <FavoritesHeader>FAVORITES</FavoritesHeader>
      </FavoritesWrapper>
      {lengthFav > 0 ? (
        <Container>{ListProduct}</Container>
      ) : (
        <Container>
          <EmptyCart text={"Yor Wishlist is currently empty."} />
        </Container>
      )}
    </Layout>
  );
};
const Container = styled.div`
  padding: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
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
