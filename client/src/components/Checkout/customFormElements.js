import React from "react";
import { ErrorInput, ErrorMessage, Input } from "./checkout.styles";
import {
  CheckBoxIcon,
  CheckBoxIconDisable,
  CheckboxLabel,
  InputCheckbox
} from "../Forms/FormCheckbox/formCheckbox.styles";

export const renderField = ({
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
export const renderCheckbox = ({ input, type, onClick, value }) => (
  <CheckboxLabel marginBottom={"0"}>
    <InputCheckbox type={type} value={value} {...input} onClick={onClick} />
    <CheckBoxIcon />
  </CheckboxLabel>
);
export const renderCheckboxDisable = () => (
  <CheckboxLabel marginBottom={"0"}>
    <InputCheckbox />
    <CheckBoxIconDisable />
  </CheckboxLabel>
);
