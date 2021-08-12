import React from "react";

import { Table } from "./StyledResultsColumn";
import { ItemTitle } from "../StyledItemTitle";
import { ItemBody } from "../StyledItemBody";

function ResultsColumn(props) {
  const rows = [
    { data: "1.02.2020", test: "Blood Test", doc: "Maccabi", id: 0 },
    { data: "1.02.2020", test: "Blood Test", doc: "Maccabi", id: 1 },
    { data: "1.02.2020", test: "Blood Test", doc: "Maccabi", id: 2 },
    { data: "1.02.2020", test: "Blood Test", doc: "Maccabi", id: 3 },
    { data: "1.02.2020", test: "Blood Test", doc: "Maccabi", id: 4 },
    { data: "1.02.2020", test: "Blood Test", doc: "Maccabi", id: 5 },
    { data: "1.02.2020", test: "Blood Test", doc: "Maccabi", id: 6 },
    { data: "1.02.2020", test: "Blood Test", doc: "Maccabi", id: 7 },
    { data: "1.02.2020", test: "Blood Test", doc: "Maccabi", id: 8 },
    { data: "1.02.2020", test: "Blood Test", doc: "Maccabi", id: 9 },
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
                <td key={rows.id}>{row.data}</td>
                <td key={rows.id}>{row.test}</td>
                <td key={rows.id}>{row.doc}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </ItemBody>
    </>
  );
}

export default ResultsColumn;
