import React, { useState } from "react";
import axios from "axios";
import {
  FormWrapper,
  FormTitle,
  ErrorMessage,
  ContentWrapper,
  LeftContent,
  RightContent,
  FormButtonWrapper,
  GoBackWrapper,
  GoBackText
} from "./registerForm.styles";
import { GoBackImage } from "../OrderForm/orderForm.styles";
import { InputHolder } from "../LoginForm/loginForm.styles";
import { Button } from "../../common/Button/Button";
import { Modal } from "../../Modal/Modal";
import { Input } from "../../common/Input/Input";
import { Eye } from "../InputPassword/InputPassword";
import {
  confirmPasswordValidate,
  emailValidate,
  firstNameValidate,
  lastNameValidate,
  loginValidate,
  passwordValidate
} from "../../common/ValidationRules/validationRules";

export const RegisterForm = props => {
  const { onClose, onRegister, onLogin } = props;

  const [error, setError] = useState({});
  const [login, setLogin] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(true);

  return (
    <Modal onClose={onClose}>
      <FormWrapper>
        <FormTitle>Create your account</FormTitle>
        <ContentWrapper>
          <LeftContent>
            <InputHolder>
              <Input
                type="text"
                label="Login *"
                value={login}
                invalid={error.login}
                onChange={onLoginChange}
                onBlur={onLoginBlur}
              />
              {error.login && <ErrorMessage>{error.login}</ErrorMessage>}
            </InputHolder>
            <InputHolder>
              <Input
                type="text"
                label="First Name *"
                value={firstName}
                invalid={error.firstName}
                onChange={onFirstNameChange}
                onBlur={onFirstNameBlur}
              />
              {error.firstName && (
                <ErrorMessage>{error.firstName}</ErrorMessage>
              )}
            </InputHolder>
            <InputHolder>
              <Input
                type="text"
                label="Last Name *"
                value={lastName}
                invalid={error.lastName}
                onChange={onLastNameChange}
                onBlur={onLastNameBlur}
              />
              {error.lastName && <ErrorMessage>{error.lastName}</ErrorMessage>}
            </InputHolder>
          </LeftContent>
          <RightContent>
            <InputHolder>
              <Input
                type="email"
                label="Email *"
                value={email}
                invalid={error.email}
                onChange={onEmailChange}
                onBlur={onEmailBlur}
              />
              {error.email && <ErrorMessage>{error.email}</ErrorMessage>}
            </InputHolder>
            <InputHolder>
              <Input
                type={passwordShown ? "password" : "text"}
                label="Password *"
                value={password}
                invalid={error.password}
                onChange={onPasswordChange}
                onBlur={onPasswordBlur}
              />
              {password && (
                <Eye onClick={() => setPasswordShown(!passwordShown)} />
              )}
              {error.password && <ErrorMessage>{error.password}</ErrorMessage>}
            </InputHolder>
            <InputHolder>
              <Input
                type={confirmPasswordShown ? "password" : "text"}
                label="Confirm Password *"
                value={confirmPassword}
                invalid={error.confirmPassword}
                onChange={onConfirmPasswordChange}
                onBlur={onConfirmPasswordBlur}
              />
              {confirmPassword && (
                <Eye
                  onClick={() => setConfirmPasswordShown(!confirmPasswordShown)}
                />
              )}
              {error.confirmPassword && (
                <ErrorMessage>{error.confirmPassword}</ErrorMessage>
              )}
            </InputHolder>
          </RightContent>
        </ContentWrapper>
        <FormButtonWrapper>
          <Button value="Register" onClick={onCustomerRegister} />
          <GoBackWrapper onClick={onLogin}>
            <GoBackImage />
            <GoBackText>Go back to Login</GoBackText>
          </GoBackWrapper>
        </FormButtonWrapper>
      </FormWrapper>
    </Modal>
  );

  function onLoginChange(event) {
    setLogin(event.target.value);
    const loginError = loginValidate(event.target.value);
    setError({
      ...error,
      login: loginError
    });
  }

  function onLoginBlur(event) {
    const loginError = loginValidate(event.target.value);
    setError({
      ...error,
      login: loginError
    });
  }

  function onFirstNameChange(event) {
    setFirstName(event.target.value);
    const firstNameError = firstNameValidate(event.target.value);
    setError({
      ...error,
      firstName: firstNameError
    });
  }

  function onFirstNameBlur(event) {
    const firstNameError = firstNameValidate(event.target.value);
    setError({
      ...error,
      firstName: firstNameError
    });
  }

  function onLastNameChange(event) {
    setLastName(event.target.value);
    const lastNameError = lastNameValidate(event.target.value);
    setError({
      ...error,
      lastName: lastNameError
    });
  }

  function onLastNameBlur(event) {
    const lastNameError = lastNameValidate(event.target.value);
    setError({
      ...error,
      lastName: lastNameError
    });
  }

  function onEmailChange(event) {
    setEmail(event.target.value);
    const emailError = emailValidate(event.target.value);
    setError({
      ...error,
      email: emailError
    });
  }

  function onEmailBlur(event) {
    const emailError = emailValidate(event.target.value);
    setError({
      ...error,
      email: emailError
    });
  }

  function onPasswordChange(event) {
    setPassword(event.target.value);
    const passwordError = passwordValidate(event.target.value);
    setError({
      ...error,
      password: passwordError
    });
  }

  function onPasswordBlur(event) {
    const passwordError = passwordValidate(event.target.value);
    setError({
      ...error,
      password: passwordError
    });
  }

  function onConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
    const confirmPasswordError = confirmPasswordValidate(
      password,
      event.target.value
    );
    setError({
      ...error,
      confirmPassword: confirmPasswordError
    });
  }

  function onConfirmPasswordBlur(event) {
    const confirmPasswordError = confirmPasswordValidate(
      password,
      event.target.value
    );
    setError({
      ...error,
      confirmPassword: confirmPasswordError
    });
  }

  function isFormInvalid() {
    return (
      loginValidate(login) ||
      firstNameValidate(firstName) ||
      lastNameValidate(lastName) ||
      emailValidate(email) ||
      passwordValidate(password) ||
      confirmPasswordValidate(password, confirmPassword)
    );
  }

  function onCustomerRegister(event) {
    event.preventDefault();

    if (isFormInvalid()) {
      const loginError = loginValidate(login);
      const firstNameError = firstNameValidate(firstName);
      const lastNameError = lastNameValidate(lastName);
      const emailError = emailValidate(email);
      const passwordError = passwordValidate(password);
      const confirmPasswordError = confirmPasswordValidate(
        password,
        confirmPassword
      );
      setError({
        ...error,
        login: loginError,
        firstName: firstNameError,
        lastName: lastNameError,
        email: emailError,
        password: passwordError,
        confirmPassword: confirmPasswordError
      });

      return;
    }

    return axios
      .post("/customers", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        login: login,
        isAdmin: false,
        enabled: true
      })
      .then(() => {
        onRegister();
      })
      .catch(error => setError(error.response.data));
  }
};
