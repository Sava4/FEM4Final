import React, { useState } from "react";
import { LabelInput, InputText, InputElement } from "./input.styles";

export const Input = props => {
  const [filled, setFilled] = useState(Boolean(props.value));
  const [value, setValue] = useState(props.value);
  return (
    <LabelInput>
      <InputText className={filled ? "active" : ""}>{props.label}</InputText>
      <InputElement
        type={props.type}
        value={value}
        onBlur={onBlur}
        onChange={props.onChange}
        onFocus={onFocus}
      />
    </LabelInput>
  );

  function onBlur(event) {
    setFilled(event.target.value);
  }

  // function onChange(event) {
  //   props.onChange(event);
  //   setValue(event.target.value);
  // }

  function onFocus() {
    setFilled(true);
  }
};
