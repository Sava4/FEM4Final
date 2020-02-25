import React, { useState } from "react";
import styled from "styled-components";

import { FormButton } from "../FormButton/form-button";
import { Modal } from "../../Modal/modal";
import { Checkbox } from "../FormCheckbox/form-checkbox";
import { InputEmail } from "../InputEmail/input-email";
import { InputPassword } from "../InputPassword/input-password";

export const LoginForm = props => {
  const { isModalOpen, onClose } = props;
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
          <InputEmail />
          <InputPassword />
          <Checkbox>
            <CheckboxText>Remember me</CheckboxText>
          </Checkbox>
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

const CheckboxText = styled.span`
  font-size: 12px;
`;

const ForgotPassword = styled.a`
  font-size: 12px;
  letter-spacing: 0.5px;
  margin-bottom: 55px;
  margin-top: 30px;
  text-decoration: underline;
  cursor: pointer;
`;
