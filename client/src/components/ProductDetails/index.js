import React from "react";
import { ProductDetails } from "./../ProductDetails/productDetails";
import { Layout } from "../common/Layout";
import { SliderProducts } from "../SliderProducts/SliderProducts";
import { SliderHomepage } from "../Slider/Slider";
import { productsAPI } from "../SliderProducts/api";

export const ProductDetailsLayout = (props) => {
  console.log("TCL: ProductDetailsLayout -> props", props)
  return (
    <Layout>
      <ProductDetails />
      {/* <SliderProducts h4={"COMPLETE THE SET"} reverse={"reverse"} collection={true} coll={false}/> */}
      {/* <SliderProducts h4={"RECENTLY VIEWED"} coll={false}/> */}
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
