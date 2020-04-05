import React from "react";
import {
  CheckboxLabel,
  InputCheckbox,
  CheckBoxIcon
} from "./formCheckbox.styles";

export const Checkbox = props => {
  return (
    <CheckboxLabel>
      <InputCheckbox type="checkbox" onClick={props.onClick} />
      <CheckBoxIcon />
      {props.children}
    </CheckboxLabel>
  );
};
