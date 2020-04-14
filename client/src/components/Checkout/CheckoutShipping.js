import React, { useEffect, useState } from "react";
import { Field, reduxForm } from "redux-form";
import {
  ButtonSubmit,
  CustomForm,
  Header,
  Wrapper,
  Location
} from "./checkout.styles";
import { FormButton } from "../Forms/FormButton/FormButton";

export const CheckoutShipping = props => {
  return <CheckoutShippingForm onSubmit={props.onSubmit} />;
};
const Addresses = [
  "Kyiv, Tarasa Shevchenko Boulevard, 2, ZARINA Store",
  "Kyiv, Maidan Nezalezhnosti, Globus, 1st Line, ZARINA Store",
  "Kyiv, Bandery Avenue, Gorodok Gallery, ZARINA Store",
  "Kyiv, Berkovetska Street, Lavina Mall, ZARINA Store"
];
const ShippingInformation = props => {
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
          <Field
            name={"Location"}
            value={item}
            component={"input"}
            type={"radio"}
          />
          {item}{" "}
        </Location>
      </Wrapper>
    );
  });
  const ArrayLocationDisable = Addresses.map(item => {
    return (
      <Wrapper flexDirection={"column"}>
        <Location disable={"disable"}>
          <Field
            name={"Location"}
            value={item}
            component={"input"}
            type={"radio"}
            disabled={true}
            checked={false}
          />
          {item}{" "}
        </Location>
      </Wrapper>
    );
  });

  const [location, setLocation] = useState(false);

  return (
    <CustomForm onSubmit={props.handleSubmit}>
      <Header align={"left"}>Shipping Method</Header>
      <Wrapper justifyContent={"space-between"}>
        <div>
          <Field
            name={"Shipping"}
            value={"Kyiv"}
            component={"input"}
            type={"radio"}
            onClick={takeLocation}
          />
          Delivery within Kyiv{" "}
        </div>{" "}
        <p>Free</p>
      </Wrapper>
      <Wrapper justifyContent={"space-between"}>
        <div>
          <Field
            name={"Shipping"}
            value={"Ukraine"}
            component={"input"}
            type={"radio"}
            onClick={takeLocation}
          />
          Delivery within Ukraine
        </div>{" "}
        <p>Free</p>
      </Wrapper>
      <Wrapper justifyContent={"space-between"}>
        <div>
          <Field
            name={"Shipping"}
            value={"Location"}
            component={"input"}
            type={"radio"}
            onClick={giveLocation}
          />
          Pick up location
        </div>{" "}
        <p>Free</p>
      </Wrapper>
      {location ? (
        <div>
          {" "}
          <Location header={"header"}>Choose your location</Location>
          {ArrayLocation}
        </div>
      ) : (
        <div>
          {" "}
          <Location header={"header"} disable={"disable"}>
            Choose your location
          </Location>
          {ArrayLocationDisable}
        </div>
      )}
      <FormButton value={"CONTINUE TO PAYMENT"} type="submit" />}
    </CustomForm>
  );
};

const CheckoutShippingForm = reduxForm({ form: "shippingForm" })(
  ShippingInformation
);
