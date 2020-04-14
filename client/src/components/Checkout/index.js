import React from "react";
import { Layout } from "../common/Layout";
import { CheckoutForm } from "./CheckoutRenderForm";
import { PagesHeader } from "./checkout.styles";

export const Checkout = () => {
  return (
    <Layout>
      <CheckoutForm />
    </Layout>
  );
};
