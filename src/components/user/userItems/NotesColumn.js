import React from "react";

import { ItemTitle } from "./ItemTitle";
import { ItemBody } from "./ItemBody";

function NotesColumn(props) {
  return (
    <>
      <ItemTitle {...props} />
      <ItemBody />
    </>
  );
}

export default NotesColumn;
