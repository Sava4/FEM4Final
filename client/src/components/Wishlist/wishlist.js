import React from "react";
import { Layout } from "../common/Layout";
import { WishlistItem } from "./wishlistItem";
import { Container } from "../ProductDetails/productDetails";
import styled, { css } from "styled-components";

export const Wishlist = () => {
  return (
    <Layout>
      <FavoritesWrapper>
        <FavoritesHeader>FAVORITES</FavoritesHeader>
      </FavoritesWrapper>
      <Container flex={"column"}>
        <WishlistItem />
        <WishlistItem />
        <WishlistItem />
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
