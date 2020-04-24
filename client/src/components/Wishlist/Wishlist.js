import React, { Fragment, useEffect, useState } from "react";
import { Layout } from "../common/Layout";
import { WishlistItem } from "./wishlistItem";
import styled from "styled-components";
import axios from "axios";
import { v4 } from "uuid";
import { EmptyCart } from "../ShoppingBag/EmptyCart";
import { useSelector } from "react-redux";
import { ArrowImg, Continue } from "../ShoppingBag/ShoppingBag";
import arrow from "../ShoppingBag/arrow.png";
import { useHistory } from "react-router";
import { PageHeader } from "../common/PageHeader/PageHeader";

export const Wishlist = props => {
  const [products, setProducts] = useState([]);
  const history = useHistory();
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
        currentPrice={products.currentPrice}
        collection={products.collection}
      />
    );
  });

  return (
    <Layout>
      <Container>
        <FavoritesWrapper>
          <PageHeader>FAVORITES</PageHeader>
        </FavoritesWrapper>

        {lengthFav > 0 ? (
          <Fragment>
            <Continue onClick={() => history.push("/")}>
              <ArrowImg src={arrow} />
              Continue Shopping
            </Continue>
            {ListProduct}
          </Fragment>
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
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 4%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
