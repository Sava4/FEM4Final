import React, {useState} from "react";
import styled from "styled-components";
import axios from "axios";

import {FormButton} from "../FormButton/form-button";
import {Modal} from "../../Modal/modal";

export const RegisterForm = props => {
  const {onClose} = props;

  const [error, setError] = useState([]);
  const [login, setLogin] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <Modal onClose={onClose}>
      <FormWrapper>
        <FormTitle>Create your account</FormTitle>
        {error &&
        <ErrorMessage>{error.map((error, index) => {
          return <div key={index}>{error}</div>
        })}
        </ErrorMessage>
        }
        <FormRegister>
          <LeftContent>
            <Input
              value={login}
              type="text"
              placeholder="Login *"
              onChange={event => setLogin(event.target.value)}/>
            <Input
              value={firstName}
              type="text"
              placeholder="First Name *"
              onChange={event => setFirstName(event.target.value)}/>
            <Input
              value={lastName}
              type="text"
              placeholder="Last Name *"
              onChange={event => setLastName(event.target.value)}/>
          </LeftContent>
          <RightContent>
            <Input
              value={email}
              type="email"
              placeholder="Email *"
              onChange={event => setEmail(event.target.value)}/>
            <InputPasswordWrapper>
              <InputPassword
                value={password}
                type="password"
                placeholder="Password *"
                onChange={event => setPassword(event.target.value)}/>
              <InputBottomText>
                At least 8 characters long, containing uppercase and lowercase
                letters and numbers.
              </InputBottomText>
            </InputPasswordWrapper>
            <Input
              value={confirmPassword}
              type="password"
              placeholder="Confirm Password *"
              onChange={event => setConfirmPassword(event.target.value)}/>
          </RightContent>
        </FormRegister>
        <FormButtonWrapper>
          <FormButton
            value="Register"
            onClick={onChange}/>
        </FormButtonWrapper>
      </FormWrapper>
    </Modal>
  );

  function onChange(event) {
    event.preventDefault();
    axios
      .post("http://localhost:5000/customers", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        login: email,
        isAdmin: false,
        enabled: true
      })
      .then(response => {
        console.log(response);
        onClose();
      })
      .catch((error) => {
        const errors = Object.keys(error.response.data).map((key) => {
          return error.response.data[key];
        });
        setError(errors);
      });
  }
};

const FormWrapper = styled.form`
  width: 980px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #002d50;
  background: #ffffff;
`;
const FormRegister = styled.div`
  display: flex;
  margin-right: 70px;
  margin-left: 70px;
`;

const FormTitle = styled.span`
  margin-top: 70px;
  margin-bottom: 50px;
  font-size: 24px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ErrorMessage = styled.span`
  font-size: 14px;
  color: red;
`;

const LeftContent = styled.div`
  width: 50%;
  margin-right: 50px;
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
`;

const FormButtonWrapper = styled.div`
  width: 40%;
  margin-bottom: 70px;
`;
