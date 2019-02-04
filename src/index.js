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

  header{
    background-color: #FFFFFF;
    padding:30px;
    color: gray;
    h1{
      font-size:58px;
    }
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
