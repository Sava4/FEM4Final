import React from "react";

export const validationRules = values => {
  let error = {};

  if (!values.password) {
    error.password = "Required";
  } else if (!values.password.length < 7) {
    error.password = "Password must be between 7 and 30 characters";
  }

  return error;
};

export const renderInput = ({ input, type, value }) => {};
