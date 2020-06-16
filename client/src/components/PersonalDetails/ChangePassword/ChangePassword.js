import React from "react";
import {
  Description,
  Details
} from "../PersonalInformation/personalInformation.styles";
import { ChangePasswordValidationForm } from "./ChangePasswordValidationForm";

export const ChangePassword = () => {
  return (
    <Details>
      <Description>
        If you want to change your password, please fill in the required fields.
        <br />
        Your password should be at least 7 characters long containing uppercase
        and lowercase letters
        <br />
        and at least one number.
      </Description>
      <ChangePasswordValidationForm />
    </Details>
  );
};
