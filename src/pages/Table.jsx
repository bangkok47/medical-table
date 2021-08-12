import React from "react";
import axios from "axios";

import { useHistory } from "react-router-dom";
import { useTable } from "react-table";

import { TableContainer } from "../components/TableContainer";
import { COLUMNS } from "../data/column";

function Table() {
  const history = useHistory();
  const handleRowClick = (row) => {
    history.push(`/user/${row.target.textContent}`);
  };

  const api =
    "http://www.filltext.com/?rows=100&id={index}&email={email}&username={username}&password={randomString|5}&business={business}&pretty=true";

  const [users, setUsers] = React.useState([]);

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
              <tr onClick={handleRowClick} key={i} {...row.getRowProps()}>
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
