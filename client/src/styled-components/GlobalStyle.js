import { createGlobalStyle } from "styled-components/macro";
import MontserratReg from "../fonts/Montserrat-Regular.ttf";
import MontserratSemi from "../fonts/Montserrat-SemiBold.ttf";
import MontserratBold from "../fonts/Montserrat-Bold.ttf";

const GlobalStyle = createGlobalStyle`
  
  /* http://meyerweb.com/eric/tools/css/reset/
    v4.0 | 20180602
    License: none (public domain)
  */
 html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  /* http://www.paulirish.com/2012/box-sizing-border-box-ftw/ (2015/04/28)*/
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  /* Additional resets */
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    text-align: inherit;
    outline: none;
    line-height: inherit;
    -webkit-appearance: none;
  }
  /* Fix antialiasing */
  *, *:before, *:after {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  /* Disable user select on everything but texts */
  *, *:before, *:after {
    user-select: none;
  }
  p, h1, h2, h3, h4, h5, h6, blockquote, pre, ul, ol, li, table, tr, th, td, input, textarea {
    user-select: text;
  }

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
    font-family: "Montserrat", system-ui, sans-serif;
    font-size: 14px;
  }
  TextPage {
    text-align: justify;
    font-size: 16px;
    line-height: 2;
    color: #484848;
  }
 WrapperPage {
    max-width: 1200px;
    width: 85%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding-bottom: 40px;
}
  HeadPage {
    text-align: center;
    align-self: center;
    font-size: 30px;
    margin: 45px;
    color: #484848;
    &: first-child {
    font-size: 30px;
    font-weight: bold;
    margin: 60px;
    }
  }
  ZarinaPage {
    font-weight: bold;
}
`;

export { GlobalStyle as default };
