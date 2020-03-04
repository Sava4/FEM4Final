import React from "react";
// import styled from "styled-components"
import { SliderHomepage } from "../Slider/Slider";
import { SliderProducts } from "../SliderProducts/SliderProducts";
import { Layout } from "../common/Layout";
import { HomepageCategiries } from "./categories";
import { ProductDetails} from "./../ProductDetails/productDetails";

export const Homepage = () => {
  return (
    <Layout>
      <SliderHomepage />
      <SliderProducts />      
      <HomepageCategiries></HomepageCategiries>
    </Layout>
  );
};
