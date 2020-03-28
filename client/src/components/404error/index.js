import React from "react";
import { Layout } from "../common/Layout";
import {Page404} from "./page404";
import {HomepageCategories} from "../homePage/categories";


export const Error404 = () => {
  return (
    <Layout>
     <Page404/>
     <HomepageCategories/>
    </Layout>
  );
};
