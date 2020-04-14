import React, { useState } from "react";
import axios from "axios";
import {
  FormWrapper,
  FormTitle,
  ErrorMessage,
  FormRegister,
  ContentWrapper,
  LeftContent,
  Input,
  RightContent,
  InputPasswordWrapper,
  InputPassword,
  InputBottomText,
  FormButtonWrapper,
  GoBackWrapper,
  GoBackText
} from "./registerForm.styles";

import { GoBackImage } from "../OrderForm/orderForm.styles";
import { FormButton } from "../FormButton/FormButton";
import { Modal } from "../../Modal/Modal";

export const RegisterForm = props => {
  const { onClose, onLogin } = props;

  const [error, setError] = useState([]);

  const [login, setLogin] = useState("");
  const [loginValidation, setLoginValidation] = useState(true);

  const [firstName, setFirstName] = useState("");
  const [firstNameValidation, setFirstNameValidation] = useState(true);

  const [lastName, setLastName] = useState("");
  const [lastNameValidation, setLastNameValidation] = useState(true);

  const [email, setEmail] = useState("");
  const [emailValidation, setEmailValidation] = useState(true);

  const [password, setPassword] = useState("");
  const [passwordValidation, setPasswordValidation] = useState(true);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordValidation, setConfirmPasswordValidation] = useState(
    true
  );

  return (
    <Modal onClose={onClose}>
      <FormWrapper>
        <FormTitle>Create your account</FormTitle>
        {error && (
          <ErrorMessage>
            {error.map((error, index) => {
              return <div key={index}>{error}</div>;
            })}
          </ErrorMessage>
        )}
        <FormRegister>
          <ContentWrapper>
            <LeftContent>
              <Input
                value={login}
                type="text"
                placeholder="Login *"
                onChange={onLoginChange}
                invalid={!loginValidation}
                onBlur={onLoginBlur}
              />
              <Input
                value={firstName}
                type="text"
                placeholder="First Name *"
                onChange={onFirstNameChange}
                invalid={!firstNameValidation}
                onBlur={onFirstNameBlur}
              />
              <Input
                value={lastName}
                type="text"
                placeholder="Last Name *"
                onChange={onLastNameChange}
                invalid={!lastNameValidation}
                onBlur={onLastNameBlur}
              />
            </LeftContent>
            <RightContent>
              <Input
                value={email}
                type="email"
                placeholder="Email *"
                onChange={onEmailChange}
                invalid={!emailValidation}
                onBlur={onEmailBlur}
              />
              <InputPasswordWrapper>
                <InputPassword
                  value={password}
                  type="password"
                  placeholder="Password *"
                  onChange={onPasswordChange}
                  invalid={!passwordValidation}
                  onBlur={onPasswordBlur}
                />
                <InputBottomText>
                  At least 7 characters long, containing uppercase and lowercase
                  letters and numbers.
                </InputBottomText>
              </InputPasswordWrapper>
              <Input
                value={confirmPassword}
                type="password"
                placeholder="Confirm Password *"
                onChange={onConfirmPasswordChange}
                invalid={!confirmPasswordValidation}
                onBlur={onConfirmPasswordBlur}
              />
            </RightContent>
          </ContentWrapper>
          <FormButtonWrapper>
            <FormButton value="Register" onClick={onChange} />
            <GoBackWrapper onClick={onLogin}>
              <GoBackImage />
              <GoBackText>Go back to Login</GoBackText>
            </GoBackWrapper>
          </FormButtonWrapper>
        </FormRegister>
      </FormWrapper>
    </Modal>
  );

  function onLoginChange(event) {
    setLogin(event.target.value);
  }

  function isLoginValid(login) {
    return login.length < 3 ? false : true;
  }

  function onLoginBlur() {
    const status = isLoginValid(login);
    setLoginValidation(status);
  }

  function onFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function isFirstNameValid(firstName) {
    return firstName === "" ? false : true;
  }

  function onFirstNameBlur() {
    const status = isFirstNameValid(firstName);
    setFirstNameValidation(status);
  }

  function onLastNameChange(event) {
    setLastName(event.target.value);
  }

  function isLastNameValid(lastName) {
    return lastName === "" ? false : true;
  }

  function onLastNameBlur() {
    const status = isLastNameValid(lastName);
    setLastNameValidation(status);
  }

  function onEmailChange(event) {
    setEmail(event.target.value);
  }

  function isEmailValid(email) {
    const emailPattern = /\S+@\S+\.\S+/;
    return emailPattern.test(email);
  }

  function onEmailBlur() {
    const status = isEmailValid(email);
    setEmailValidation(status);
  }

  function onPasswordChange(event) {
    setPassword(event.target.value);
  }

  function isPasswordValid(password) {
    return password.length < 7 ? false : true;
  }

  function onPasswordBlur() {
    const status = isPasswordValid(password);
    setPasswordValidation(status);
  }

  function onConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
  }

  function isConfirmPasswordValid(password, confirmPassword) {
    return password === confirmPassword ? true : false;
  }

  function onConfirmPasswordBlur() {
    const status = isConfirmPasswordValid(password, confirmPassword);
    setConfirmPasswordValidation(status);
  }

  function isFormValid() {
    return (
      isLoginValid(login) &&
      isFirstNameValid(firstName) &&
      isLastNameValid(lastName) &&
      isEmailValid(email) &&
      isPasswordValid(password) &&
      isConfirmPasswordValid(password, confirmPassword)
    );
  }

  function onChange(event) {
    event.preventDefault();

    if (!isFormValid()) {
      const statusLogin = isLoginValid(login);
      setLoginValidation(statusLogin);
      const statusFirstName = isFirstNameValid(firstName);
      setFirstNameValidation(statusFirstName);
      const statusLastName = isLastNameValid(lastName);
      setLastNameValidation(statusLastName);
      const statusEmail = isEmailValid(email);
      setEmailValidation(statusEmail);
      const statusPassword = isPasswordValid(password);
      setPasswordValidation(statusPassword);
      const statusConfirmPassword = isConfirmPasswordValid(
        password,
        confirmPassword
      );
      setConfirmPasswordValidation(statusConfirmPassword);
      return;
    }

    axios
      .post("http://localhost:5000/customers", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        login: login,
        isAdmin: false,
        enabled: true
      })
      .then(response => {
        onClose();
      })
      .catch(error => {
        const errors = Object.keys(error.response.data).map(key => {
          return error.response.data[key];
        });
        setError(errors);
      });
  }
};
