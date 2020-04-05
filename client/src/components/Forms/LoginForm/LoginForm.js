import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FormWrapper,
  FormLogIn,
  FormTitle,
  FormSubtitle,
  FormRegister,
  CheckboxText,
  Line,
  FormRegisterSubtitle
} from "./loginForm.styles";

import { FormButton } from "../FormButton/FormButton";
import { Modal } from "../../Modal/Modal";
import { Checkbox } from "../FormCheckbox/FormCheckbox";
import { InputEmail } from "../InputEmail/InputEmail";
import { InputPassword } from "../InputPassword/InputPassword";
import { loginAction } from "../../../store/login";

export const LoginForm = props => {
  const { onClose, onRegister } = props;

  const [emailValidation] = useState(true);
  const [passwordValidation] = useState(true);

  const storedEmail = useSelector(state => state.login.loginOrEmail);
  const [email, setEmail] = useState(storedEmail ? storedEmail : "");
  const localCart = useSelector(state => state.shoppingCart.locCart);

  const storedPassword = useSelector(state => state.login.password);
  const [password, setPassword] = useState(
    storedPassword ? storedPassword : ""
  );

  const [remember, setRemember] = useState(false);

  const dispatch = useDispatch();

  return (
    <Modal onClose={onClose}>
      <FormWrapper>
        <FormLogIn>
          <FormTitle>Log in</FormTitle>
          <FormSubtitle>
            Please enter your details to log in to your Zarina Account.
          </FormSubtitle>
          <InputEmail
            value={email}
            placeholder={"Email"}
            onChange={onEmailChange}
          />
          <InputPassword
            value={password}
            placeholder={"Password"}
            onChange={onPasswordChange}
          />
          <Checkbox onClick={rememberMe}>
            <CheckboxText>Remember me</CheckboxText>
          </Checkbox>
          <FormButton
            value={"Log in"}
            onClick={onSubmit}
            disabled={!emailValidation || !passwordValidation}
          />
        </FormLogIn>
        <Line />
        <FormRegister>
          <FormTitle>Create your account</FormTitle>
          <FormRegisterSubtitle>
            By creating Zarina Account, you will be able to place your order
            faster, store multiple shipping addresses, view and track orders,
            and perform many other operations.
          </FormRegisterSubtitle>
          <FormButton value={"Register"} onClick={onRegister} />
        </FormRegister>
      </FormWrapper>
    </Modal>
  );

  function onSubmit(event) {
    event.preventDefault();
    if (email === "" || password === "") {
      return;
    }
    dispatch(
      loginAction(email, password, remember, localCart, () => {
        onClose();
      })
    );
  }

  function onEmailChange(email) {
    setEmail(email);
  }

  function onPasswordChange(password) {
    setPassword(password);
  }

  function rememberMe(event) {
    setRemember(event.target.checked);
  }
};
