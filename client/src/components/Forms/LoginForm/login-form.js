import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { FormButton } from "../FormButton/form-button";
import { Modal } from "../../Modal/modal";
import { Checkbox } from "../FormCheckbox/form-checkbox";
import { InputEmail } from "../InputEmail/input-email";
import { InputPassword } from "../InputPassword/input-password";
import { loginAction } from "../../../store/login";
import { mediaMobile } from "../../../styled-components/media-breakpoints-mixin";

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

const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  border: 1px solid #002d50;
  background: #ffffff;

  ${mediaMobile(`
  flex-direction: column;
  align-items: center;
  `)}
`;

const FormLogIn = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  margin-left: 70px;
  margin-right: 70px;
  margin-bottom: 70px;

  ${mediaMobile(`
  width: 80%;
  margin: 0 0 50px 0;
  align-items: center;
  `)}
`;

const Line = styled.div`
  display: flex;
  align-self: center;
  height: 320px;
  border-right: 1px solid #a7aabb;

  ${mediaMobile(`
  width: 70%;
  height: 1px;
  border-bottom: 1px solid black;
  `)}
`;

const FormRegister = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  margin-right: 70px;
  margin-left: 70px;
  margin-bottom: 70px;

  ${mediaMobile(`
  width: 80%;
  margin: 0 0 50px 0;
  align-items: center;
  `)}
`;

const FormTitle = styled.span`
  margin-top: 90px;
  margin-bottom: 15px;
  font-size: 23px;
  text-transform: uppercase;
  letter-spacing: 1px;

  ${mediaMobile(`
  margin: 50px 0 15px 0;
  `)}
`;

const FormSubtitle = styled.span`
  font-size: 12px;
  letter-spacing: 0.5px;
  margin-bottom: 30px;
`;
const FormRegisterSubtitle = styled(FormSubtitle)`
  line-height: 30px;
`;

const CheckboxText = styled.span`
  font-size: 11px;
`;
