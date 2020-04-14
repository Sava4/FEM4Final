import React from "react";
import {
  CustomForm,
  Header,
  ProductContainer,
  Wrap,
} from "./checkout.styles";
import { Field, reduxForm } from "redux-form";
import {FormButton} from "../Forms/FormButton/FormButton";

export const PaymentForm = props => {
    const {onClick} = props;
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

      <FormButton value={"COMPLETE ORDER"} type="submit" width={"100%"} onClick={props}/>
    </CustomForm>
  );
};
export const ReduxPayment = reduxForm({
  form: "contactInformation"
})(PaymentForm);
