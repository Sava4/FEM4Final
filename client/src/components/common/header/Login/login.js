import React from "react";
import styled from "styled-components";

import login from "./login.png";
import { mediaMobile } from "../../../../styled-components/media-breakpoints-mixin";

export const Login = props => {
  return (
    <ServicesIcon onClick={props.onClick}>
      <LoginIcon />
      <LoginText>My account</LoginText>
    </ServicesIcon>
  );
};

const LoginIcon = styled.div`
  width: 20px;
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
  cursor: pointer;
`;
