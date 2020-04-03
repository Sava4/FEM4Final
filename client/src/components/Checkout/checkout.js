import React from "react";
import { OrderSummary } from "./orderSummary";
import { CheckoutWrapper } from "./checkout.styles";

export const CheckoutForm = () => {
  return (
    <CheckoutWrapper>
      <OrderSummary />
    </CheckoutWrapper>
  );
};
