import { createGlobalStyle } from "styled-components/macro";

import MontserratReg from "./fonts/Montserrat-Regular.ttf";
import MontserratSemi from "./fonts/Montserrat-SemiBold.ttf";
import MontserratBold from "./fonts/Montserrat-Bold.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: 'Montserrat';
  src: url(${MontserratReg}) format('truetype');
  font-style: normal;
  font-weight: 400;
  font-display: fallback;
}

@font-face {
  font-family: 'Montserrat';
  src: url(${MontserratSemi}) format('truetype');
  font-style: normal;
  font-weight: 600;
  font-display: fallback;
}

@font-face {
  font-family: 'Montserrat';
  src: url(${MontserratBold}) format('truetype');
  font-style: normal;
  font-weight: bold;
  font-display: fallback;
}

  body {
    font-family: "Montserrat", sans-serif;
  }
`;

export { GlobalStyle as default };
