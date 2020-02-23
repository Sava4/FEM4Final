import React from "react";
// import { Layout } from "./layout";
import { Header, Footer } from "../Components";
import { StaticPage } from "../Components";

export const StaticPageView = () => {
  return (
    <div>
      <Header />
      <StaticPage />
      <Footer />
    </div>
  );
};
