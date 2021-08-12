import React from "react";

import { Info } from "./StyledNotesColumn";
import { ItemTitle } from "../StyledItemTitle";
import { ItemBody } from "../StyledItemBody";

function NotesColumn(props) {
  return (
    <>
      <ItemTitle {...props} />
      <ItemBody>
        <Info>
          <ul>
            <li>
              <span>
                Please note that the test was done too late. If they had done
                the test first, they might have found you.
              </span>
            </li>
            <li>Check if the test results match the data.</li>
            <li>
              Where they sent for appropriate tests following the findings?
            </li>
          </ul>
        </Info>
      </ItemBody>
    </>
  );
}

export default NotesColumn;
