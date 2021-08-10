import React from "react";
import styles from "styled-components";

import Header from "./components/Header";
import Table from "./components/Table";

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
        <Table />
      </AppWrapper>
    </div>
  );
}

export default App;
