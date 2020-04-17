import React from "react";
import { InputWrapper, Input } from "./button.styles";

export const Button = props => {
  return (
    <InputWrapper width={props.width}>
      <Input
        type="submit"
        value={props.value}
        onClick={props.onClick}
        disabled={props.disabled}
        secondary={props.secondary}
        display={props.display}
      />
    </InputWrapper>
  );
};
