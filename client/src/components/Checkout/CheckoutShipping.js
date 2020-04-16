import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import {
  CustomForm,
  Header,
  Wrapper,
  Location,
  RadioWrapper,
  ErrorMessage,
  ErrorInput
} from "./checkout.styles";
import { FormButton } from "../Forms/FormButton/FormButton";
import { renderCheckboxDisable, renderCheckbox } from "./CheckoutContact";
import {
  CheckBoxIcon,
  CheckboxLabel,
  InputCheckbox
} from "../Forms/FormCheckbox/formCheckbox.styles";

export const CheckoutShipping = props => {
  return <CheckoutShippingForm onSubmit={props.onSubmit} />;
};
export const validate = values => {
  const errors = {};
  if (!values.shipping) {
    errors.shipping = "Required";
  }
  return errors;
};

const Addresses = [
  "Kyiv, Tarasa Shevchenko Boulevard, 2, ZARINA Store",
  "Kyiv, Maidan Nezalezhnosti, Globus, 1st Line, ZARINA Store",
  "Kyiv, Bandery Avenue, Gorodok Gallery, ZARINA Store",
  "Kyiv, Berkovetska Street, Lavina Mall, ZARINA Store"
];
const ShippingInformation = props => {
  const { reset } = props;
  const [location, setLocation] = useState(false);
  console.log(location);
  const giveLocation = () => {
    setLocation(true);
  };
  const takeLocation = () => {
    setLocation(false);
  };

  const ArrayLocation = Addresses.map(item => {
    return (
      <Wrapper flexDirection={"column"}>
        <Location>
          <RadioWrapper>
            <Field
              name={"Location"}
              value={item}
              component={renderCheckbox}
              type={"radio"}
            />
            {item}
          </RadioWrapper>
        </Location>
      </Wrapper>
    );
  });
  const ArrayLocationDisable = Addresses.map(item => {
    return (
      <Wrapper flexDirection={"column"}>
        <Location disable={"disable"}>
          <RadioWrapper>
            <Field
              name={"Location"}
              value={item}
              component={renderCheckboxDisable}
              type={"radio"}
              disabled={true}
              checked={false}
            />
            {item}{" "}
          </RadioWrapper>
        </Location>
      </Wrapper>
    );
  });

  return (
    <CustomForm onSubmit={props.handleSubmit}>
      <Header align={"left"}>Shipping Method</Header>
      <Wrapper justifyContent={"space-between"}>
        <RadioWrapper>
          <Field
            name={"shipping"}
            value={"Kyiv"}
            component={renderCheckbox}
            type={"radio"}
            onClick={takeLocation || reset}
          />
          Delivery within Kyiv
        </RadioWrapper>
        <p>Free</p>
      </Wrapper>
      <Wrapper justifyContent={"space-between"}>
        <RadioWrapper>
          <Field
            name={"shipping"}
            value={"Ukraine"}
            component={renderCheckbox}
            type={"radio"}
            onClick={takeLocation || reset}
          />
          Delivery within Ukraine
        </RadioWrapper>
        <p>Free</p>
      </Wrapper>
      <Wrapper justifyContent={"space-between"}>
        <RadioWrapper>
          <Field
            name={"shipping"}
            value={"Location"}
            component={renderCheckbox}
            type={"radio"}
            onClick={giveLocation}
          />
          Pick up location
        </RadioWrapper>
        <p>Free</p>
      </Wrapper>
      {location ? (
        <div>
          <Location header={"header"}>Choose your location</Location>
          {ArrayLocation}
        </div>
      ) : (
        <div>
          <Location header={"header"} disable={"disable"}>
            Choose your location
          </Location>
          {ArrayLocationDisable}
        </div>
      )}
      <FormButton value={"CONTINUE TO PAYMENT"} type="submit" />
    </CustomForm>
  );
};

const CheckoutShippingForm = reduxForm({ form: "shippingForm", validate })(
  ShippingInformation
);
