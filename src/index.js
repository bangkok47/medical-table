import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Rajdhani';
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Global />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
