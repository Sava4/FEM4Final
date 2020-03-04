import React from "react";

import { Layout } from "../common/Layout";
import { SliderHomepage } from "../Slider/Slider";
import { ProductsList } from "../ProductsList/productList";
import { HomepageCategories } from "./categories";

export const Homepage = () => {
  return (
    <Layout>
      <SliderHomepage />
      <ProductsList />
      <HomepageCategories></HomepageCategories>
    </Layout>
  );
};
