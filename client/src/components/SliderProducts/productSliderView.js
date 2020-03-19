import React from "react";
// import { Layout } from "./layout";
import { Layout } from "../common/Layout";
import { ProductDetailsSlider } from "../SliderProductDetails/productDetailsSlider";
import { SliderProducts } from "../SliderProducts/SliderProducts";

export const ProductSliderView = () => {
  return (
    <Layout>
      <ProductDetailsSlider />
      <SliderProducts h4={"COMPLETE THE SET"} reverse={"reverse"} />
      <SliderProducts h4={"RECENTLY VIEWED"} />
    </Layout>
  );
};
