import React, {useEffect, useState} from "react";
import {
  CustomForm,
  ErrorInput,
  ErrorMessage,
  Header,
  Input,
  Wrapper
} from "./checkout.styles";
import { Field, reduxForm } from "redux-form";
import {FormButton} from "../Forms/FormButton/FormButton";

const validate = (values, props) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.phone) {
    errors.phone = "Required";
  } else if (
    !/^((\+?3)?8)?((0\(\d{2}\)?)|(\(0\d{2}\))|(0\d{2}))\d{7}$/.test(
      values.phone
    )
  ) {
    errors.phone = "Invalid phone. The phone number have to start +380";
  }
  if (!values.age) {
    errors.age = "Required";
  } else if (isNaN(Number(values.age))) {
    errors.age = "Must be a number";
  } else if (Number(values.age) < 18) {
    errors.age = "Sorry, you must be at least 18 years old";
  }
  return errors;
};

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


const UserInformation = props => {
    const [isMobile, setMobile] = useState({});
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
    }, []);
    const handleWindowSizeChange = () => {
        setMobile({ width: window.innerWidth });
    };
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
        {isMobile.width<850
        ? null
        : <FormButton value={"CONTINUE TO SHIPPING"} type="submit" />}
    </CustomForm>
  );
};
export const ReduxUserInformation = reduxForm({
  form: "contactInformation",
  validate
})(UserInformation);
