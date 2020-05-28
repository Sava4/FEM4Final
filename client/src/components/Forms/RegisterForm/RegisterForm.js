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

export const RegisterForm = props => {
  const { onClose, onRegister, onLogin } = props;

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
  const [passwordShown, setPasswordShown] = useState(true);
  const [passwordValidation, setPasswordValidation] = useState(true);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(true);
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
        <ContentWrapper>
          <LeftContent>
            <InputHolder>
              <Input
                type="text"
                label="Login *"
                value={login}
                invalid={!loginValidation}
                onChange={onLoginChange}
                onBlur={onLoginBlur}
              />
            </InputHolder>
            <InputHolder>
              <Input
                type="text"
                label="First Name *"
                value={firstName}
                invalid={!firstNameValidation}
                onChange={onFirstNameChange}
                onBlur={onFirstNameBlur}
              />
            </InputHolder>
            <InputHolder>
              <Input
                type="text"
                label="Last Name *"
                value={lastName}
                invalid={!lastNameValidation}
                onChange={onLastNameChange}
                onBlur={onLastNameBlur}
              />
            </InputHolder>
          </LeftContent>
          <RightContent>
            <InputHolder>
              <Input
                type="email"
                label="Email *"
                value={email}
                invalid={!emailValidation}
                onChange={onEmailChange}
                onBlur={onEmailBlur}
              />
            </InputHolder>
            <InputHolder>
              <Input
                type={passwordShown ? "password" : "text"}
                label="Password *"
                value={password}
                invalid={!passwordValidation}
                onChange={onPasswordChange}
                onBlur={onPasswordBlur}
              />
             {password && <Eye onClick={() => setPasswordShown(!passwordShown)}/>}
            </InputHolder>
            <InputHolder>
              <Input
                type={confirmPasswordShown ? "password" : "text"}
                label="Confirm Password *"
                value={confirmPassword}
                invalid={!confirmPasswordValidation}
                onChange={onConfirmPasswordChange}
                onBlur={onConfirmPasswordBlur}
              />
              {confirmPassword && <Eye onClick={() => setConfirmPasswordShown(!confirmPasswordShown)}/>}
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
      .catch(error => {
        const errors = Object.keys(error.response.data).map(key => {
          return error.response.data[key];
        });
        setError(errors);
      });
  }
};
