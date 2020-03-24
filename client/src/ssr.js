import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App";
import { ServerStyleSheet } from "styled-components";

const sheet = new ServerStyleSheet();
const MyApp = App();

try {
  const html = renderToString(sheet.collectStyles(<MyApp />));
  console.log("HTML:", html);

  const styleTags = sheet.getStyleTags();
  console.log("StyleTags:", styleTags);
} catch (error) {
  console.error(error);
} finally {
  sheet.seal();
}
