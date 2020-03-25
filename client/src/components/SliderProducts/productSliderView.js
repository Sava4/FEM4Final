import React from "react";
import { ProductDetails } from "../ProductDetails/productDetails";
import { SliderProducts } from "../SliderProducts/SliderProducts";

export const ProductSliderView = () => {
  return (
    <>
      <ProductDetails />
      <SliderProducts h4={"COMPLETE THE SET"} reverse={"reverse"} />
      <SliderProducts h4={"RECENTLY VIEWED"} />
    </>
  );
};
