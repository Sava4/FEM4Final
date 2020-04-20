import React from "react";
import { CheckboxLabel, InputCheckbox, CheckBoxIcon } from "./checkbox.styles";

export const Checkbox = props => {
  return (
    <CheckboxLabel>
      <InputCheckbox type="checkbox" onClick={props.onClick} />
      <CheckBoxIcon />
      {props.children}
    </CheckboxLabel>
  );
};
