import React, { useState, useRef } from "react";
import styled from "styled-components";
import { AddSubscriber } from "./newSubscriber";
// import { mediaMobile } from "../../../../styled-components/media-breakpoints-mixin";

export const Email = () => {
  let [email, setEmail] = useState("");
  let emailRef = useRef();
  const submitButton = () => {
    setEmail(emailRef.current.value);
  };

  return (
    <div>
      <EmailInput ref={emailRef} type="email" placeholder="Email" />
      <EmailButton type="button" onClick={submitButton}>
        Sign up
      </EmailButton>
      <AddSubscriber email={email} />
    </div>
  );
};

const EmailInput = styled.input`
  width: 299px;
  margin-top: 2px;
  border: none;
  border-bottom: 1px solid #262c37;
  font-size: 14px;
  ::placeholder {
    color: #80858d;
    letter-spacing: 1px;
  }
  :focus {
    outline: none;
  }
`;

const EmailButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 27px;
  width: 200px;
  height: 37px;
  background: #002d50;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
  font-size: 14px;
  color: white;
`;
