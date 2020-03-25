import React from "react";
import { ProductDetails } from "./../ProductDetails/productDetails";
import { Layout } from "../common/Layout";
import { SliderProducts } from "../SliderProducts/SliderProducts";

export const ProductDetailsLayout = () => {
  return (
    <Layout>
      <ProductDetails />
      <SliderProducts h4={"COMPLETE THE SET"} reverse={"reverse"} />
      <SliderProducts h4={"RECENTLY VIEWED"} />
    </Layout>
  );
};
