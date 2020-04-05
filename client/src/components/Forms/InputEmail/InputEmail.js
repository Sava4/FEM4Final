import React, { useState } from "react";
import { useSelector } from "react-redux";
import { InputWrapper, Input, ErrorMessage } from "./inputEmail.styles";

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
