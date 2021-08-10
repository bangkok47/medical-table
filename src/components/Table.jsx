import React from "react";
import axios from "axios";
import styles from "styled-components";

import { useTable } from "react-table";
import { COLUMNS } from "./column";

const TableContainer = styles.div`
    max-width: 1400px;
    margin: auto;
    padding: 30px;
    margin-top: 35px;

    table {
      border-collapse: collapse;
      width: 100%;
      font-family: 'News Cycle';
      font-size: 12px;

      td,
      th {
        padding: 8px;
        padding-top: 20px;
        padding-bottom: 20px;
        text-align: center;
      }

     th {
       background-color: #24a4ff;
       color: #fff;
     }

     tr {
      border: 1px solid #ddd;
      cursor: pointer;
     }

     tr:hover {
       background-color: #a8dfff; 
     }
    }
`;

function Table() {
  const api =
    "http://www.filltext.com/?rows=100&id={index}&email={email}&username={username}&password={randomString|5}&business={business}&pretty=true";
  const [users, setUsers] = React.useState([]);
  console.log(users);

  React.useEffect(() => {
    axios.get(api).then((res) => setUsers(res.data));
  }, []);

  const columns = React.useMemo(() => COLUMNS, [COLUMNS]);

  const data = React.useMemo(() => users, [users]);

  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
    useTable({
      columns,
      data,
    });
  console.log(headerGroups);

  return (
    <TableContainer>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, i) => (
            <tr key={i} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, i) => (
                <th key={i} {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr key={i} {...row.getRowProps()}>
                {row.cells.map((cell, i) => {
                  return (
                    <td key={i} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </TableContainer>
  );
}

export default Table;
