import React from "react";
import {
  CustomForm,
  Header,
  ProductContainer,
  RadioWrapper,
  Wrap
} from "./checkout.styles";
import { Field, reduxForm } from "redux-form";
import { PaymentInputs } from "./CheckoutPaymentCard";
import { renderCheckbox } from "./customFormElements";
import { validate } from "./validate";
import {Button} from "../common/Button/Button";

export const CheckoutPaymentForm = props => {
  return (
    <CustomForm onSubmit={props.handleSubmit}>
      <Header align={"left"}>Payment</Header>
      <ProductContainer>
        <Wrap>
          <RadioWrapper>
            <Field
              name={"payment"}
              component={renderCheckbox}
              value={"Cash"}
              type={"radio"}
            />
            <span>Cash</span>
          </RadioWrapper>
        </Wrap>
      </ProductContainer>
      <Wrap>
        <RadioWrapper>
          <Field
            name={"payment"}
            component={renderCheckbox}
            value={"Card"}
            type={"radio"}
          />
          <span>Card</span>
        </RadioWrapper>
      </Wrap>

      <PaymentInputs />
      <Button
        value={"COMPLETE ORDER"}
        type="submit"
        width={"100%"}
        onClick={props}
      />
    </CustomForm>
  );
};
export const ReduxPayment = reduxForm({
  form: "paymentInformation",
  validate
})(CheckoutPaymentForm);
