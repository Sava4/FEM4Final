import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Input } from "../../common/Input/Input";

export const InputEmail = props => {
  const error = useSelector(state => {
    return state.loginStatus;
  });
  const [email, setEmail] = useState(props.value);
  const [emailValidation, setEmailValidation] = useState(true);

  return (
    <>
      <Input
        type="email"
        label="Email"
        value={email}
        invalid={!emailValidation}
        onChange={onChange}
        onBlur={onEmailBlur}
      />
      {error && error.loginOrEmail && (
        <ErrorMessage>The email is not correct. Please, try again</ErrorMessage>
      )}
    </>
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

export const ErrorMessage = styled.span`
  font-size: 10px;
  color: red;
`;
