import React from "react";
// import styled from "styled-components"

import { Layout } from "../common/Layout";
import { HomepageCategiries } from "./categories";
import { SliderHomepage } from "./../Slider/Slider";

export const Homepage = () => {
  return (
    <Layout>
      <SliderHomepage />
      <HomepageCategiries></HomepageCategiries>
    </Layout>
  );
};
