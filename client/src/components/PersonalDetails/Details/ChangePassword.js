import React from "react";
import styled from "styled-components";

import {Description, Details, InputWrapper} from "./PersonalInformation";
import {FormButton} from "../../Forms/FormButton/FormButton";
import {Input} from "../../Forms/RegisterForm/registerForm.styles";

export const ChangePassword = () => {
  return (
    <Details>
      <Description>If you want to change your password, please fill in the required fields.
        <br/>Your password should be at least 8 characters long containing uppercase and lowercase letters
        <br/>and at least one number.</Description>
      <InputWrapper>
        <Input type="password" placeholder={"Current Password *"}/>
        <Input type="password" placeholder={"New Password *"}/>
        <Input type="password" placeholder={"Confirm Password *"}/>
        <FormButton value={"Save Changes"}/>
      </InputWrapper>
    </Details>
  )
};