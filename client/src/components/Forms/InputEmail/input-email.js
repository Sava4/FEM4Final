import React, { useState } from "react";
import styled from "styled-components";

export const InputEmail = props => {
  const [email, setEmail] = useState(props.value);
  const [emailValidation, setEmailValidation] = useState(true);

  return (
    <Input
      type="email"
      placeholder={props.placeholder}
      value={email}
      onChange={onChange}
      invalid={!emailValidation}
      onBlur={onEmailBlur}
    />
  );

  function onChange(event) {
    setEmail(event.target.value);
    props.onEmailChange(event.target.value);
  }

  function isEmailValid(email) {
    const emailPattern = /\S+@\S+\.\S+/;
    return emailPattern.test(email);
  }

  function onEmailBlur() {
    const status = isEmailValid(email);
    setEmailValidation(status);
  }
};

const Input = styled.input`
  width: 100%;
  margin-bottom: 30px;
  padding-bottom: 5px;
  border: none;
  border-bottom: 1px solid #80858d;
  border-bottom-color: ${props => (props.invalid ? "red" : "#80858D")};
  letter-spacing: 0.5px;
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
