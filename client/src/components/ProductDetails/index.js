import React from "react";
import { ProductDetails } from "./../ProductDetails/productDetails";
import { Layout } from "../common/Layout";
import { SliderProducts } from "../SliderProducts/SliderProducts";
import { SliderHomepage } from "../Slider/Slider";

export const ProductDetailsLayout = () => {
  return (
    <Layout>
      <ProductDetails />
      <SliderProducts h4={"COMPLETE THE SET"} reverse={"reverse"} />
      <SliderProducts h4={"RECENTLY VIEWED"} />
      <SliderHomepage
        h4={"DISCOVER ZARINA LOOKS"}
        dots={false}
        center={true}
        auto={false}
        homePage={false}
        show={3}
        showMedia={2}
        arrows={true}
        height={460}
        width={380}
      />
    </Layout>
  );
};
