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
    background-color: #42b1ff;
    cursor: pointer;

    td {
      color: #fff;
    }
  }
`;

function ResultsColumn(props) {
  const rows = [
    { data: "1.02.2020", test: "Blood Test", doc: "Maccabi" },
    { data: "1.02.2020", test: "Blood Test", doc: "Maccabi" },
    { data: "1.02.2020", test: "Blood Test", doc: "Maccabi" },
    { data: "1.02.2020", test: "Blood Test", doc: "Maccabi" },
    { data: "1.02.2020", test: "Blood Test", doc: "Maccabi" },
    { data: "1.02.2020", test: "Blood Test", doc: "Maccabi" },
    { data: "1.02.2020", test: "Blood Test", doc: "Maccabi" },
    { data: "1.02.2020", test: "Blood Test", doc: "Maccabi" },
    { data: "1.02.2020", test: "Blood Test", doc: "Maccabi" },
    { data: "1.02.2020", test: "Blood Test", doc: "Maccabi" },
  ];
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
            {rows.map((row, i) => (
              <tr key={i}>
                <td key={i}>{row.data}</td>
                <td key={i}>{row.test}</td>
                <td key={i}>{row.doc}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </ItemBody>
    </>
  );
}

export default ResultsColumn;
