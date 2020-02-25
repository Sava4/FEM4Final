import React, { useState } from "react";
import styled from "styled-components";

export const InputEmail = () => {
  const [email, setEmail] = useState("");
  const [emailValidation, setEmailValidation] = useState(true);

  return (
    <Input
      type="email"
      placeholder="Email"
      value={email}
      onChange={event => setEmail(event.target.value)}
      invalid={!emailValidation}
      onBlur={onEmailBlur}
    />
  );

  function isEmailValid(email) {
    const emailPattern = /\S+@\S+\.\S+/;
    return emailPattern.test(email);
  }

  function onEmailBlur() {
    const status = isEmailValid(email);
    setEmailValidation(status);
  }
};

const Input = styled.input`
  width: 100%;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #80858d;
  border-bottom-color: ${props => (props.invalid ? "red" : "#80858D")};
  letter-spacing: 0.5px;

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
