import React from "react";

import { Layout } from "../common/Layout";
import { SliderHomepage } from "../Slider/Slider";
import { ProductsList } from "../ProductsList/productList";
import { HomepageCategories } from "./categories";
import { SelectedCollections } from "./selectedCollections/selectedCollections";
import { AboutCompany } from "./aboutCompany/aboutCompany"

export const Homepage = () => {
  return (
    <Layout>
      <SliderHomepage />
      <ProductsList />
      <HomepageCategories/>
      <SelectedCollections/>
      <AboutCompany/>
    </Layout>
  );
};
