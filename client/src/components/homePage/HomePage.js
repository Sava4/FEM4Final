import React from "react";
// import styled from "styled-components"
import { SliderHomepage } from "../Slider/Slider";
import { SliderProducts } from "../SliderProducts/SliderProducts";

import { Layout } from "../common/Layout";
import { SliderHomepage } from "../Slider/Slider";
import { ProductsList } from "../ProductsList/productList";
import { HomepageCategories } from "./categories";

import { ProductDetails } from "./../ProductDetails/productDetails";

export const Homepage = () => {
  return (
    <Layout>
      <SliderHomepage />
      <ProductsList />
      <HomepageCategories></HomepageCategories>
      <SliderProducts h4={"FEATURED"} reverse={"reverse"} />

    </Layout>
  );
};
