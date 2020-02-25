import React, { useState } from "react";
import styled from "styled-components";

import checkBox from "./check-box.png";
import checkBoxChecked from "./check-box-checked.png";

import { FormButton } from "./FormButton/form-button";
import { Modal } from "../Modal/modal";

export const LoginForm = props => {
  const { isModalOpen, onClose } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValidation, setEmailValidation] = useState(true);
  const [passwordValidation, setPasswordValidation] = useState(true);

  return (
    <Modal isModalOpen={isModalOpen} onClose={onClose}>
      <FormWrapper>
        <FormLogIn>
          <FormTitle>Log in</FormTitle>
          <FormSubtitle>
            Please enter your details to log in to your Zarina Account.
          </FormSubtitle>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            invalid={!emailValidation}
            onBlur={onEmailBlur}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            invalid={!passwordValidation}
            onChange={event => setPassword(event.target.value)}
            onBlur={onPasswordBlur}
          />
          <CheckboxLabel>
            <InputCheckbox type="checkbox" />
            <CheckBoxIcon />
            Remember me
          </CheckboxLabel>
          <FormButton
            onClick={onSubmit}
            disabled={!emailValidation || !passwordValidation}
          />
          <ForgotPassword>Forgot your password?</ForgotPassword>
        </FormLogIn>
        <Line />
        <FormRegister>
          <FormTitle>Create your account</FormTitle>
          <FormRegisterSubtitle>
            By creating Zarina Account, you will be able to place your order
            faster, store multiple shipping addresses, view and track orders,
            and perform many other operations.
          </FormRegisterSubtitle>
          <FormButton value="Register" />
        </FormRegister>
      </FormWrapper>
    </Modal>
  );

  function onSubmit(event) {
    event.preventDefault();

    console.log(email, password);
  }

  function isEmailValid(email) {
    const emailPattern = /\S+@\S+\.\S+/;
    return emailPattern.test(email);
  }

  function isPasswordValid(password) {
    if (password.length < 6) {
      return false;
    } else {
      return true;
    }
  }

  function onEmailBlur() {
    const status = isEmailValid(email);
    setEmailValidation(status);
  }

  function onPasswordBlur() {
    const status = isPasswordValid(password);
    setPasswordValidation(status);
  }
};

const FormWrapper = styled.form`
  width: 980px;
  display: flex;
  border: 1px solid #002d50;
  background: #ffffff;
`;

const FormLogIn = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  margin-left: 70px;
  margin-right: 70px;
`;

const Line = styled.div`
  display: flex;
  align-self: center;
  height: 360px;
  border-right: 1px solid #a7aabb;
`;

const FormRegister = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  margin-right: 70px;
  margin-left: 70px;
`;

const FormTitle = styled.span`
  margin-top: 90px;
  margin-bottom: 15px;
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const FormSubtitle = styled.span`
  font-size: 14px;
  letter-spacing: 0.5px;
  margin-bottom: 30px;
`;
const FormRegisterSubtitle = styled(FormSubtitle)`
  line-height: 30px;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #80858d;
  border-bottom-color: ${props => (props.invalid ? "red" : "#80858D")};
  letter-spacing: 0.5px;

  ::placeholder {
    color: #80858d;
  }

  :focus {
    outline: none;
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: 25px;
  font-size: 12px;
  letter-spacing: 0.5px;
  cursor: pointer;
`;

const CheckBoxIcon = styled.span`
  width: 10px;
  height: 10px;
  margin-right: 5px;
  background-image: url(${checkBox});
  background-size: contain;

  input:checked + & {
    background-image: url(${checkBoxChecked});
  }
`;

const InputCheckbox = styled.input`
  display: none;
`;

const ForgotPassword = styled.a`
  font-size: 12px;
  letter-spacing: 0.5px;
  margin-bottom: 55px;
  margin-top: 30px;
  text-decoration: underline;
  cursor: pointer;
`;
