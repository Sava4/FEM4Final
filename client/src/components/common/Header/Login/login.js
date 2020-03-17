import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import login from "./login.png";
import { mediaMobile } from "../../../../styled-components/media-breakpoints-mixin";

export const Login = props => {
  const user = useSelector(state => {
    return state.user;
  });

  return (
    <ServicesIcon onClick={props.onClick}>
      <LoginIcon />
      {user ? user.firstName : <LoginText>My account</LoginText>}
    </ServicesIcon>
  );
};

const LoginIcon = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  background-image: url(${login});
  background-repeat: no-repeat;
  background-size: contain;
`;

const LoginText = styled.span`
  ${mediaMobile(`
    display: none;
  `)}
`;

const ServicesIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
