import React from "react";
import styled from "styled-components";

export const renderField = props => {
  const {
    input,
    label,
    type,
    meta: { touched, active, error }
  } = props;
  return (
    <LabelInput>
      <InputText className={active || input.value ? "active" : ""}>
        {label}
      </InputText>
      <InputElement {...input} type={type} invalid={touched && error} />
      {touched && error && <Error>{error}</Error>}
    </LabelInput>
  );
};

export const LabelInput = styled.label`
  width: 100%;
  margin-bottom: 3px;
`;

export const InputElement = styled.input`
  width: inherit;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #80858d;
  border-bottom-color: ${props => (props.invalid ? "#db3d3d" : "#80858d")};
  letter-spacing: 0.7px;
  font-size: 12px;
  -webkit-appearance: none;
  -webkit-border-radius: 0;

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

export const InputText = styled.div`
  transform: translateY(15px);
  margin-bottom: 5px;
  font-size: 12px;
  letter-spacing: 0.4px;
  color: #80858d;
  pointer-events: none;
  transition: 0.2s ease all;

  &.active {
    transform: translateY(0);
    font-size: 10px;
  }
`;

export const Error = styled.div`
  position: absolute;
  bottom: -12px;
  color: #db3d3d;
  font-size: 10px;
`;
