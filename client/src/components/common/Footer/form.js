import styles from "./FormControls.module.css";
import { Field, reduxForm, formValueSelector } from "redux-form";
// import {Textarea} from "./FormsControls";
// import {maxLengthCreator, required} from "../../../utils/validators/validators";
import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { AddSubscriber } from "./newSubscriber";
import { useEffect } from "react";
import axios from "axios";

let Email = props => {
  const {
    error,
    handleSubmit,
    pristine,
    reset,
    emailValue,
    formValues,
    submitting
  } = props;

  let [email, setEmail] = useState(""); //если без рефов и через emailValue то он каждый символ передает и запускат регистрацию
  let [signup, setSignup] = useState("Sign Up");
  let emailRef = useRef();
  console.log(emailValue);

  const submitButton = e => {
    setEmail(emailRef.current.value);
    console.log(email);
    setSignup("ДОБАВЛЯЕМ");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitButton)}>
        <div>
          <Field
            name="emailValue"
            component={Input}
            type="email"
            placeholder="Email"
            ref={emailRef}
            validate={[required, Length, emailValid]}
            style={{
              width: "299px",
              marginTop: "2px",
              border: "none",
              borderBottom: "1px solid #262c37",
              fontSize: "14px"
            }}
          />
        </div>
        <div>
          <EmailButton type="submit" disabled={submitting} validate={[required, Length, emailValid]} onClick={handleSubmit(submitButton)}>
            {signup}
            {/* {emailValue} */}
          </EmailButton>
        </div>
        <AddSubscriber
          email={email}
          emailValue={emailValue}
          setSignup={setSignup}
          setEmail={setEmail}
          reset={reset}
        />
      </form>
    </div>
  );
};

//validators
export const required = value => {
  console.log("TCL: value", value);
  if (value) return undefined;
  return "Field is required";
};
const emailValid = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'still not email'
    : undefined
export const LengthCreator = Length => value => {
  if (value.length > Length) return `Max length is ${Length} symbols`;
  return undefined;
};
export const Length = LengthCreator(20);

const FormControl = ({ input, meta: { touched, error }, children }) => {
  const hasError = touched && error;
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const submit = emailValue => {
  console.log("TCL: value", emailValue);
};

export const Input = props => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

// export default reduxForm({form: 'emailValue'})(Email);


Email = reduxForm({
  form: "emailValue" // a unique identifier for this form
})(Email);


const selector = formValueSelector("emailValue"); // <-- same as form name

Email = connect(state => {
  const emailValue = selector(state, "emailValue");
  return { emailValue };
})(Email);

export default Email;

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
  box-sizing: content-box;
  display: flex;
  flex-wrap: wrap;
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
