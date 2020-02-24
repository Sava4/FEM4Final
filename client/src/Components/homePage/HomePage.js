import React from "react";
// import styled from "styled-components"

import { Layout } from "../common/Layout";
import { HomepageCategiries } from "./categories";

export const Homepage = () => {
  return (
    <Layout>
      <HomepageCategiries></HomepageCategiries>
    </Layout>
  );
};
