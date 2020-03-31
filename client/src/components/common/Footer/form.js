import styles from "./FormControls.module.css";
import { Field, reduxForm, formValueSelector } from "redux-form";
// import {Textarea} from "./FormsControls";
// import {maxLengthCreator, required} from "../../../utils/validators/validators";
import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { AddSubscriber } from "./newSubscriber";

let Email = props => {
  const { error, handleSubmit, pristine, reset, emailValue, formValues, value, submitting } = props;
  let [email, setEmail] = useState("");//если без рефов и через emailValue то он каждый символ передает и запускат регистрацию
  let emailRef = useRef();
  const submitButton = () => {
    setEmail(emailRef.current.value);
    reset(); //чистим поле ввода  
//    ()=> EmailValue="привет" 
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
            validate={[required, Length]}
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
          <EmailButton type="submit" onClick={submitButton}>
            {" "}
            Sign up   
       {emailValue}
                 
          </EmailButton>
        </div>
      </form>     
      <AddSubscriber email={email} emailValue={emailValue} />
    </div>
  );
};

//validators
export const required = value => {
console.log("TCL: value", value)
  if (value) return undefined;
  return "Field is required";
};

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

export const submit = emailValue=>{
console.log("TCL: value", emailValue)

}

export const Input = props => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

// export default reduxForm({form: 'dialog-add-message-form'})(AddMessageForm);
// export default reduxForm({form: 'email'})(Email);

// Decorate with redux-form
Email = reduxForm({
  form: "emailValue" // a unique identifier for this form
})(Email);

// Decorate with connect to read form values
const selector = formValueSelector("emailValue"); // <-- same as form name


Email = connect(state => {
  // can select values individually
  const emailValue = selector(state, "emailValue");
  return {emailValue};
  console.log("TCL: emailValue", emailValue)
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
