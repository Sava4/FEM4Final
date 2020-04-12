import React, { useState } from "react";
import {
  ButtonSubmit,
  CustomForm,
  Header,
  ProductContainer,
  SummaryWrapper,
  Wrap,
  Wrapper
} from "./checkout.styles";
import { Field, reduxForm } from "redux-form";

export const PaymentForm = props => {
  return (
    <CustomForm onSubmit={props.handleSubmit}>
      <Header align={"left"}>Payment</Header>
      <ProductContainer>
        <Wrap>
          <Field
            name={"payment"}
            component={"input"}
            value={"Cash"}
            type={"radio"}
          />
          <span>Cash</span>
        </Wrap>
      </ProductContainer>
      <Wrap>
        <Field
          name={"payment"}
          component={"input"}
          value={"Card"}
          type={"radio"}
        />
        Card
      </Wrap>

      <ButtonSubmit value={"COMPLETE ORDER"} type="submit" />
    </CustomForm>
  );
};
export const ReduxPayment = reduxForm({
  form: "contactInformation"
})(PaymentForm);
