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
  const [login, setLogin] = useState();
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
          <Button value="Register" onClick={onChange} />
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
    const loginError = loginValidate(login);
    setError({
      ...error,
      login: loginError
    });
  }

  function onFirstNameChange(event) {
    setFirstName(event.target.value);
    const firstNameError = firstNameValidate(firstName);
    setError({
      ...error,
      firstName: firstNameError
    });
  }

  function onLastNameChange(event) {
    setLastName(event.target.value);
    const lastNameError = lastNameValidate(lastName);
    setError({
      ...error,
      lastName: lastNameError
    });
  }

  function onEmailChange(event) {
    setEmail(event.target.value);
    const emailError = emailValidate(email);
    setError({
      ...error,
      email: emailError
    });
  }

  function onPasswordChange(event) {
    setPassword(event.target.value);
    const passwordError = passwordValidate(password);
    setError({
      ...error,
      password: passwordError
    });
  }

  function onConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
    const confirmPasswordError = confirmPasswordValidate(
      confirmPassword,
      password
    );
    setError({
      ...error,
      confirmPassword: confirmPasswordError
    });
  }

  function isFormValid() {
    return (
      loginValidate(login) &&
      firstNameValidate(firstName) &&
      lastNameValidate(lastName) &&
      emailValidate(email) &&
      passwordValidate(password) &&
      confirmPasswordValidate(confirmPassword, password)
    );
  }

  function onChange(event) {
    event.preventDefault();

    if (!isFormValid()) {
      loginValidate(error.login) ||
        firstNameValidate(error.firstName) ||
        lastNameValidate(error.lastName) ||
        emailValidate(error.email) ||
        passwordValidate(error.password) ||
        confirmPasswordValidate(error.confirmPassword && error.password);

      return;
    }

    axios
      .post("/customers", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        login: login,
        isAdmin: false,
        enabled: true
      })
      .then(response => {
        onRegister();
      })
      .catch(error => setError(error.response.data));
  }
};
