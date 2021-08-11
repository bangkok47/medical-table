import React from "react";
import styled from "styled-components";

import { ItemTitle } from "./ItemTitle";
import { ItemBody } from "./ItemBody";

const Table = styled.table`
  border-collapse: collapse;

  thead {
    border-bottom: 2px solid #ddd;
    font-size: 10px;
    color: #bdbebd;
  }

  td,
  th {
    padding: 25px;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    font-size: 9px;
  }

  tr > td {
    color: grey;
    border-top: 1px solid #ddd;
  }

  tbody > tr:hover {
    background-color: #a8dfff;
    cursor: pointer;
  }
`;

function ResultsColumn(props) {
  return (
    <>
      <ItemTitle {...props} />
      <ItemBody>
        <Table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Subject</th>
              <th>Medicals ins.</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1/02/2020</td>
              <td>Blood Test</td>
              <td>Maccabi</td>
            </tr>
            <tr>
              <td>1/02/2020</td>
              <td>Blood Test</td>
              <td>Maccabi</td>
            </tr>
            <tr>
              <td>1/02/2020</td>
              <td>Blood Test</td>
              <td>Maccabi</td>
            </tr>
            <tr>
              <td>1/02/2020</td>
              <td>Blood Test</td>
              <td>Maccabi</td>
            </tr>
            <tr>
              <td>1/02/2020</td>
              <td>Blood Test</td>
              <td>Maccabi</td>
            </tr>
            <tr>
              <td>1/02/2020</td>
              <td>Blood Test</td>
              <td>Maccabi</td>
            </tr>
            <tr>
              <td>1/02/2020</td>
              <td>Blood Test</td>
              <td>Maccabi</td>
            </tr>
            <tr>
              <td>1/02/2020</td>
              <td>Blood Test</td>
              <td>Maccabi</td>
            </tr>
            <tr>
              <td>1/02/2020</td>
              <td>Blood Test</td>
              <td>Maccabi</td>
            </tr>
            <tr>
              <td>1/02/2020</td>
              <td>Blood Test</td>
              <td>Maccabi</td>
            </tr>
          </tbody>
        </Table>
      </ItemBody>
    </>
  );
}

export default ResultsColumn;
