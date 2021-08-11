import React from "react";
import styles from "styled-components";
import { Route } from "react-router-dom";

import Header from "./components/Header";
import Table from "./pages/Table";
import User from "./pages/User";

const AppWrapper = styles.div`
  min-height: 100vh;
  min-width: 1600px;
  background: #fff;
`;

function App() {
  return (
    <div className="App">
      <AppWrapper>
        <Header />
        <Route path="/" exact>
          <Table />
        </Route>
        <Route path="/user">
          <User />
        </Route>
      </AppWrapper>
    </div>
  );
}

export default App;
