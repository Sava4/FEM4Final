import React from "react";

import { Layout } from "../common/Layout";
import { SliderHomepage } from "../Slider/Slider";
import { HomepageCategories } from "./categories";

export const Homepage = () => {
  return (
    <Layout>
      <SliderHomepage />
      <HomepageCategories></HomepageCategories>
    </Layout>
  );
};
