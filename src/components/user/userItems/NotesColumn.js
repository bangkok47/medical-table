import React from "react";
import styled from "styled-components";

import { ItemTitle } from "./ItemTitle";
import { ItemBody } from "./ItemBody";

const Info = styled.div`
  margin: 30px 20px 30px 40px;
  font-size: 12px;

  li {
    margin-bottom: 20px;
    color: grey;
  }

  li::marker {
    color: blue;
  }
`;

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
