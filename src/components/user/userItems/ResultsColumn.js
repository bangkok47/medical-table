import React from "react";

import { ItemTitle } from "./ItemTitle";
import { ItemBody } from "./ItemBody";

function ResultsColumn(props) {
  return (
    <>
      <ItemTitle {...props} />
      <ItemBody />
    </>
  );
}

export default ResultsColumn;
