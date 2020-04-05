import React, { useState } from "react";
import { useSelector } from "react-redux";
import { InputWrapper, Input, ErrorMessage } from "./inputPassword.styles";

export const InputPassword = props => {
  const [password, setPassword] = useState(props.value);
  const [passwordValidation, setPasswordValidation] = useState(true);
  const error = useSelector(state => {
    return state.loginStatus;
  });

  return (
    <InputWrapper>
      <Input
        type="password"
        placeholder={props.placeholder}
        value={password}
        invalid={!passwordValidation}
        onChange={onChange}
        onBlur={onPasswordBlur}
      />
      {error && error.password && (
        <ErrorMessage>
          The password is not correct. Please, try again
        </ErrorMessage>
      )}
    </InputWrapper>
  );

  function onChange(event) {
    setPassword(event.target.value);
    props.onChange(event.target.value);
  }

  function isPasswordValid(password) {
    if (password.length < 6) {
      return false;
    } else {
      return true;
    }
  }

  function onPasswordBlur() {
    const status = isPasswordValid(password);
    setPasswordValidation(status);
  }
};
