import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const InputEmail = props => {
  const error = useSelector(state => {
    return state.loginStatus;
  });
  const [email, setEmail] = useState(props.value);
  const [emailValidation, setEmailValidation] = useState(true);

  return (
    <InputWrapper>
      <Input
        type="email"
        placeholder={props.placeholder}
        value={email}
        onChange={onChange}
        invalid={!emailValidation}
        onBlur={onEmailBlur}
      />
      {error && error.loginOrEmail && (
        <ErrorMessage>The email is not correct. Please, try again</ErrorMessage>
      )}
    </InputWrapper>
  );

  function onChange(event) {
    setEmail(event.target.value);
    props.onChange(event.target.value);
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

const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 100%;
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

const ErrorMessage = styled.span`
  font-size: 10px;
  color: red;
`;
