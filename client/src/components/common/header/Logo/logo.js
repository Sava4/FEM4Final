import React from "react";
import styled from "styled-components";

import logo from "./mainLogo.png";
import {
  mediaDesktop,
  mediaMobile,
  mediaTablet
} from "../../../../styled-components/media-breakpoints-mixin";

export const Logo = () => {
  return <MainLogo />;
};

const MainLogo = styled.div`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
  
    ${mediaDesktop(`
      width: 263px;
      height: 64px;
    `)}
    ${mediaTablet(`
      width: 205px;
      height: 50px;
    `)}
    ${mediaMobile(`
      width: 144px;
      height: 35px;
    `)}
`;
