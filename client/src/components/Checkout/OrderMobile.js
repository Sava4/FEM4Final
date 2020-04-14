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
  Wrap,
  Wrapper
} from "./checkout.styles";
import { FormButton } from "../Forms/FormButton/FormButton";
import { OrderSummary } from "./OrderSummary";
import { validate } from "./CheckoutContact";

const renderField = ({
  input,
  placeholder,
  type,
  value,
  meta: { touched, error, warning }
}) => (
  <ErrorInput>
    <Input {...input} placeholder={placeholder} type={type} value={value} />
    {touched && error && <ErrorMessage>{error}</ErrorMessage>}
  </ErrorInput>
);

const OrderInformation = props => {
  const [isMobile, setMobile] = useState({});
  const [location, setLocation] = useState(false);
  const { icons, totalPrices } = props;
  const Addresses = [
    "Kyiv, Tarasa Shevchenko Boulevard, 2, ZARINA Store",
    "Kyiv, Maidan Nezalezhnosti, Globus, 1st Line, ZARINA Store",
    "Kyiv, Bandery Avenue, Gorodok Gallery, ZARINA Store",
    "Kyiv, Berkovetska Street, Lavina Mall, ZARINA Store"
  ];

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
  }, []);
  const handleWindowSizeChange = () => {
    setMobile({ width: window.innerWidth });
  };
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

  return (
    <CustomForm onSubmit={props.handleSubmit}>
      <Header align={"left"}>Contact Information</Header>
      <Field
        name={"email"}
        type={"text"}
        placeholder={"Email*"}
        component={renderField}
      />
      <Field
        name={"firstName"}
        type={"text"}
        placeholder={"First Name*"}
        component={renderField}
      />
      <Field
        name={"lastName"}
        type={"text"}
        placeholder={"Last Name*"}
        component={renderField}
      />
      <Wrapper>
        <Field name={"getMyself"} component={"input"} type={"checkbox"} />
        I'll get the order myself.
      </Wrapper>
      <Header align={"left"}>Shipping Address</Header>
      <Field
        name={"city"}
        type={"text"}
        placeholder={"City*"}
        component={renderField}
      />
      <Field
        name={"address"}
        type={"text"}
        placeholder={"Address*"}
        component={renderField}
      />
      <Field
        name={"phone"}
        type={"text"}
        placeholder={"Phone*"}
        component={renderField}
      />

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
      <OrderSummary icons={icons} totalPrices={totalPrices} />
      <FormButton
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
