import React, {useState} from "react";
import {Holder, LabelInput, InputText, InputElement} from "./input.styles";

export const Input = props => {
  const [filled, setFilled] = useState(Boolean(props.value));

  return (
    <LabelInput>
      <InputText className={filled ? "active" : ""}>{props.label}</InputText>
      <InputElement
        type={props.type}
        value={props.value}
        invalid={props.invalid}
        onBlur={onBlur}
        onChange={props.onChange}
        onFocus={onFocus}
      />
    </LabelInput>
  );

  function onBlur(event) {
    props.onBlur(event);
    setFilled(event.target.value);
  }

  function onFocus() {
    props.onFocus();
    setFilled(true);
  }
};

Input.defaultProps = {
  onFocus: () => {
  },
  onBlur: () => {
  }
};
