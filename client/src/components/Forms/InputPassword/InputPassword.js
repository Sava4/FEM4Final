import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ErrorMessage } from "../InputEmail/InputEmail";
import { Input } from "../../common/Input/Input";

export const InputPassword = props => {
  const [password, setPassword] = useState(props.value);
  const [passwordValidation, setPasswordValidation] = useState(true);
  const error = useSelector(state => {
    return state.loginStatus;
  });

  return (
    <>
      <Input
        type="password"
        label="Password"
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
    </>
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
