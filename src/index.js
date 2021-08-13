import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import store from "./redux/store";
import { Provider } from "react-redux";

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
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
