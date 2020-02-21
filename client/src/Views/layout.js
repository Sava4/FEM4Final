import React from "react";
import { Header } from "./../Header/header";
import { Footer } from "./../Footer";

export const Layout = () => {
  return (
    <div>
      <Header />

      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Our amazing solutions"
};
