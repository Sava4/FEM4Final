import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { ErrorMessage } from "../InputEmail/InputEmail";
import { Input } from "../../common/Input/Input";
import eye from "./eye.png";

export const InputPassword = props => {
  const [password, setPassword] = useState(props.value);
  const [passwordShown, setPasswordShown] = useState(true);
  const [passwordValidation, setPasswordValidation] = useState(true);
  const error = useSelector(state => {
    return state.loginStatus;
  });

  return (
    <>
      <Holder>
        <Input
          type={passwordShown ? "password" : "text"}
          label="Password"
          value={password}
          invalid={!passwordValidation}
          onChange={onChange}
          onBlur={onPasswordBlur}
        />
        {password && <Eye onClick={() => setPasswordShown(!passwordShown)} />}
      </Holder>
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

export const Holder = styled.div`
  width: 100%;
  position: relative;
`;

export const Eye = styled.div`
  width: 17px;
  height: 15px;
  position: absolute;
  right: 0;
  bottom: 5px;
  background-image: url(${eye});
  background-size: contain;
  background-repeat: no-repeat;
`;
