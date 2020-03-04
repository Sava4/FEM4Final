import React from "react";
// import styled from "styled-components"
import { SliderHomepage } from "../Slider/Slider";
import {ProductsList} from "../ProductsList/productList";
import { Layout } from "../common/Layout";
import { HomepageCategiries } from "./categories";

export const Homepage = () => {
  return (
    <Layout>
      <SliderHomepage />
      <ProductsList/>
      <HomepageCategiries></HomepageCategiries>
    </Layout>
  );
};
