import React from "react";
import { usePaymentInputs } from "react-payment-inputs";
import images from "react-payment-inputs/images";
import {
  CardWrapper,
  Input,
  ProductContainer,
  Wrapper
} from "./checkout.styles";

export const PaymentInputs = () => {
  const {
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps
  } = usePaymentInputs();

  return (
    <ProductContainer>
      <CardWrapper>
        <svg {...getCardImageProps({ images })} />
      </CardWrapper>
      <Input {...getCardNumberProps()} />
      <Wrapper justifyContent={"space-between"}>
        <Input width={"card"} {...getExpiryDateProps()} />
        <Input width={"card"} {...getCVCProps()} />
      </Wrapper>
    </ProductContainer>
  );
};
