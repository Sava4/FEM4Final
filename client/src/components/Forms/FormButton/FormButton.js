import React from "react";
import { InputWrapper, Input } from "./formButtom.styles";

export const FormButton = props => {
  return (
    <InputWrapper width={props.width}>
      <Input
        type="submit"
        value={props.value}
        onClick={props.onClick}
        disabled={props.disabled}
        secondary={props.secondary}
      />
    </InputWrapper>
  );
};
