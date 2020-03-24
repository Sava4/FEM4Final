import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

import { GoBackImage } from "../OrderForm/order-form";
import { FormButton } from "../FormButton/form-button";
import { Modal } from "../../Modal/modal";
import { mediaMobile } from "../../../styled-components/media-breakpoints-mixin";

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

  //firstName
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

  //lastName
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

  //email
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

  //password
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

  //confirm password
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

const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #002d50;
  background: #ffffff;

  ${mediaMobile(`
  flex-direction: column;
  align-items: center;
  `)}
`;
const FormRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 70px;
  margin-left: 70px;

  ${mediaMobile(`
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-right: 0;
  margin-left: 0;
  `)}
`;

const FormTitle = styled.span`
  margin-top: 70px;
  margin-bottom: 50px;
  font-size: 24px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;

  ${mediaMobile(`
  margin-top: 50px;
  margin-bottom: 40px;
  `)}
`;

const ErrorMessage = styled.span`
  font-size: 14px;
  color: red;
`;

const LeftContent = styled.div`
  width: 50%;
  margin-right: 50px;

  ${mediaMobile(`
  width: 80%;
  margin: 0;
  `)}
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 45px;
  padding-bottom: 5px;
  border: none;
  border-bottom: 1px solid #80858d;
  border-bottom-color: ${props => (props.invalid ? "red" : "#80858D")};
  letter-spacing: 0.5px;
  font-size: 12px;

  :-webkit-autofill {
    -webkit-box-shadow: inset 0 0 0 50px #fff !important;
    -webkit-text-fill-color: #999 !important;
    color: #999 !important;
  }

  ::placeholder {
    color: #80858d;
  }

  :focus {
    outline: none;
  }
`;

const InputPassword = styled(Input)`
  margin-bottom: 5px;
`;

const InputPasswordWrapper = styled.div`
  margin-bottom: 32px;
`;

const InputBottomText = styled.div`
  font-size: 8px;
  color: #80858d;
`;

const RightContent = styled.div`
  width: 50%;
  margin-left: 50px;
  margin-bottom: 20px;

  ${mediaMobile(`
  width: 80%;
  margin: 0;
  `)}
`;

const ContentWrapper = styled.div`
  display: flex;

  ${mediaMobile(`
  flex-direction: column;
  align-items: center;
  `)}
`;

const FormButtonWrapper = styled.div`
  width: 40%;
  margin-bottom: 50px;

  ${mediaMobile(`
  width: 80%;
  margin-bottom: 40px;
  `)}
`;

const GoBackWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  cursor: pointer;
`;

const GoBackText = styled.span`
  font-size: 14px;
  color: #80858d;
`;
