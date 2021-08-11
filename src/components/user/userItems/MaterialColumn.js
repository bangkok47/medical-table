import React from "react";

import { ItemTitle } from "./ItemTitle";
import { ItemBody } from "./ItemBody";

function MaterialColumn(props) {
  return (
    <>
      <ItemTitle {...props} />
      <ItemBody />
    </>
  );
}

export default MaterialColumn;
