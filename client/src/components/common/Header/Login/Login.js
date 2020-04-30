import React from "react";
import { useSelector } from "react-redux";
import { ServicesIcon, LoginIcon, LoginText } from "./login.styles";

export const Login = props => {
  const user = useSelector(state => {
    return state.user;
  });

  return (
    <ServicesIcon onClick={props.onClick}>
      <LoginIcon />
      {user ? (
        <LoginText>{user.firstName}</LoginText>
      ) : (
        <LoginText>My account</LoginText>
      )}
    </ServicesIcon>
  );
};
