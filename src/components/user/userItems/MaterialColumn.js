import React from "react";

import { ItemTitle } from "./ItemTitle";
import { ItemBody } from "./ItemBody";

function MaterialColumn(props) {
  return (
    <>
      <ItemTitle {...props} />
      <ItemBody></ItemBody>
    </>
  );
}

export default MaterialColumn;
