import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

// Import component App
import App from "./app";

const GlobalStyles = createGlobalStyle`
  *{
  font-family: sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  }
`;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Fragment>
    <GlobalStyles />
    <App />
  </Fragment>,
  rootElement
);
