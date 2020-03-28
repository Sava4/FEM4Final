import React from "react";

import { SliderHomepage } from "../Slider/Slider";
import { SliderProducts } from "../SliderProducts/SliderProducts";
import { Layout } from "../common/Layout";
import { HomepageCategories } from "./categories";
import { SelectedCollections } from "./selectedCollections/selectedCollections";
import { AboutCompany } from "./aboutCompany/aboutCompany";

export const Homepage = () => {
  return (
    <Layout>
      <SliderHomepage />
      <SliderProducts h4={"FEATURED"} reverse={"reverse"} />
      <HomepageCategories />
      <SelectedCollections />
      <AboutCompany />
    </Layout>
  );
};
