import React, { useState, useEffect } from "react";
import { WishlistItem } from "../../Wishlist/wishlistItem";
import { v4 } from "uuid";
import axios from "axios";
import { Details } from "../PersonalInformation/personalInformation.styles";

export const WishList = () => {
  const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setLoading(true);
    const fetchPosts = async () => {
      const res = await axios.get("/products");
      setProducts(res.data);
    };
    fetchPosts();
    // setLoading(false);
  }, []);

  const Products = products.map(products => {
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

  return <Details>{Products}</Details>;
};
