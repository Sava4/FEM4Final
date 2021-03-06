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
      <SliderHomepage
        dots={true}
        center={false}
        auto={true}
        homePage={true}
        show={1}
        height={425}
        width={`inherit`}
        arrows={false}
      />
      <SliderProducts h4={"FEATURED"} reverse={"reverse"} perPage={20} />
      <HomepageCategories />
      <SelectedCollections />
      <AboutCompany />
    </Layout>
  );
};
