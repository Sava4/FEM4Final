import React from "react";

import { SliderHomepage } from "../Slider/Slider";
import { SliderProducts } from "../SliderProducts/SliderProducts";
import { Layout } from "../common/Layout";
import { HomepageCategories } from "./categories";
import { SelectedCollections } from "./selectedCollections/SelectedCollections";
import { AboutCompany } from "./aboutCompany/AboutCompany";

export const Homepage = () => {
  return (
    <Layout>
      <SliderHomepage
        dots={true}
        center={false}
        auto={true}
        homePage={true}
        show={1}
        height={425}
        arrows={false}
      />
      <SliderProducts h4={"FEATURED"} reverse={"reverse"} />
      <HomepageCategories />
      <SelectedCollections />
      <AboutCompany />
    </Layout>
  );
};
