import React from "react";

import { SliderHomepage } from "../Slider/Slider";
import { SliderProducts } from "../SliderProducts/SliderProducts";
import { Layout } from "../common/Layout";
import { ProductsList } from "../ProductsList/productList";
import { HomepageCategories } from "./categories";
import { ProductDetails } from "./../ProductDetails/productDetails";
import { SelectedCollections } from "./selectedCollections/selectedCollections";
import { AboutCompany } from "./aboutCompany/aboutCompany";

export const Homepage = () => {
  return (
    <Layout>
      <SliderHomepage />
      <SliderProducts h4={"FEATURED"} reverse={"reverse"} />
      <ProductsList />
      <HomepageCategories />
      <SelectedCollections />
      <AboutCompany />    
    </Layout>    
  );
};
