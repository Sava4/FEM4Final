import React, { useState } from "react";
import styled from "styled-components";

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
        onChange={onChange}
        onFocus={onFocus}
      />
    </LabelInput>
  );

  function onBlur(event) {
    setFilled(event.target.value);
  }

  function onChange(event) {
    setValue(event.target.value);
  }

  function onFocus() {
    setFilled(true);
  }
};

const LabelInput = styled.label`
  width: 100%;
  margin-bottom: 30px;
`;

const InputElement = styled.input`
  width: inherit;
  border: none;
  border-bottom: 1px solid #80858d;
  border-bottom-color: ${props => (props.invalid ? "red" : "#80858D")};
  letter-spacing: 0.7px;
  font-size: 12px;

  :-webkit-autofill {
    -webkit-box-shadow: inset 0 0 0 50px #fff !important;
    -webkit-text-fill-color: #999 !important;
    color: #999 !important;
  }

  ::placeholder {
    color: #80858d;
  }

  :focus {
    outline: none;
  }
`;

const InputText = styled.div`
  transform: translateY(15px);
  margin-bottom: 5px;
  font-size: 12px;
  color: #80858d;
  pointer-events: none;
  transition: 0.2s ease all;

  &.active {
    transform: translateY(0);
  }
`;
