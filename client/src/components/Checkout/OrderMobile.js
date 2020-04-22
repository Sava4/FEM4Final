import React, { useEffect, useState } from "react";
import { Field, reduxForm } from "redux-form";
import {
  CustomForm,
  ErrorInput,
  ErrorMessage,
  Header,
  Input,
  Location,
  ProductContainer,
  RadioWrapper,
  Wrap,
  Wrapper
} from "./checkout.styles";
import { OrderSummary } from "./OrderSummary";
import { renderCheckbox, renderCheckboxDisable } from "./customFormElements";
import { validate } from "./validate";
import { PaymentInputs } from "./CheckoutPaymentCard";
import { Button } from "../common/Button/Button";

const renderField = ({
  input,
  placeholder,
  type,
  value,
  meta: { touched, error }
}) => (
  <ErrorInput>
    <Input {...input} placeholder={placeholder} type={type} value={value} />
    {touched && error && <ErrorMessage>{error}</ErrorMessage>}
  </ErrorInput>
);

const OrderInformation = props => {
  const [location, setLocation] = useState(false);
  const { icons, totalPrices } = props;
  const Addresses = [
    "Kyiv, Tarasa Shevchenko Boulevard, 2, ZARINA Store",
    "Kyiv, Maidan Nezalezhnosti, Globus, 1st Line, ZARINA Store",
    "Kyiv, Bandery Avenue, Gorodok Gallery, ZARINA Store",
    "Kyiv, Berkovetska Street, Lavina Mall, ZARINA Store"
  ];
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
            <span>{item}</span>
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
            <span>{item}</span>
          </RadioWrapper>
        </Location>
      </Wrapper>
    );
  });

  return (
    <CustomForm onSubmit={props.handleSubmit}>
      <Header align={"left"}>Contact Information</Header>
      <Field
        name={"email"}
        type={"text"}
        placeholder={"Email *"}
        component={renderField}
      />
      <Field
        name={"firstName"}
        type={"text"}
        placeholder={"First Name *"}
        component={renderField}
      />
      <Field
        name={"lastName"}
        type={"text"}
        placeholder={"Last Name *"}
        component={renderField}
      />
      <Wrapper>
        <Field
          name={"getMyself"}
          component={renderCheckbox}
          type={"checkbox"}
        />
        I'll get the order myself.
      </Wrapper>
      <Header align={"left"}>Shipping Address</Header>
      <Field
        name={"city"}
        type={"text"}
        placeholder={"City"}
        component={renderField}
      />
      <Field
        name={"address"}
        type={"text"}
        placeholder={"Address"}
        component={renderField}
      />
      <Field
        name={"phone"}
        type={"text"}
        placeholder={"Phone *"}
        component={renderField}
      />
      <Header align={"left"}>Shipping Method</Header>
      <Wrapper justifyContent={"space-between"}>
        <RadioWrapper>
          <Field
            name={"Shipping"}
            value={"Kyiv"}
            component={renderCheckbox}
            type={"radio"}
            onClick={takeLocation}
          />
          <span> Delivery within Kyiv </span>
        </RadioWrapper>
        <p>Free</p>
      </Wrapper>
      <Wrapper justifyContent={"space-between"}>
        <RadioWrapper>
          <Field
            name={"Shipping"}
            value={"Ukraine"}
            component={renderCheckbox}
            type={"radio"}
            onClick={takeLocation}
          />
          Delivery within Ukraine
        </RadioWrapper>
        <p>Free</p>
      </Wrapper>
      <Wrapper justifyContent={"space-between"}>
        <RadioWrapper>
          <Field
            name={"Shipping"}
            value={"Location"}
            component={renderCheckbox}
            type={"radio"}
            onClick={giveLocation}
          />
          <span> Pick up location </span>
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
          <span> Card </span>
        </RadioWrapper>
      </Wrap>
      <PaymentInputs />
      <OrderSummary icons={icons} totalPrices={totalPrices} mobile={true} />
      <Button
        value={"COMPLETE ORDER"}
        type="submit"
        width={"100%"}
        onClick={props}
      />
    </CustomForm>
  );
};
export const OrderMobile = reduxForm({
  form: "contactInformation",
  validate
})(OrderInformation);
