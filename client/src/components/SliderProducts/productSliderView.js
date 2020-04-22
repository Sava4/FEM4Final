import React from "react";
import { Layout } from "../common/Layout";
import { ProductDetails } from "../ProductDetails/ProductDetails";
import { SliderProducts } from "../SliderProducts/SliderProducts";

export const ProductSliderView = () => {
  return (
    <Layout>
      <ProductDetails />
      <SliderProducts h4={"COMPLETE THE SET"} reverse={"reverse"} />
      <SliderProducts h4={"RECENTLY VIEWED"} />
    </Layout>
  );
};
