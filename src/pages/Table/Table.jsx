import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import { useTable, usePagination } from "react-table";

import { setUsers } from "../../redux/actions/actions";

import { TableContainer } from "../../components/simple/Table/TableContainer";
import { COLUMNS } from "../../data/column";

import TablePagination from "../../components/simple/Table/TablePagination/TablePagination";

function Table() {
  const dispatch = useDispatch();
  const users = useSelector(({ users }) => users.users);

  const history = useHistory();
  const handleRowClick = (e) => {
    console.log(e.target);
    history.push("/user");
  };

  React.useEffect(() => {
    dispatch(setUsers());
  }, [dispatch]);

  const columns = React.useMemo(() => COLUMNS, [COLUMNS]);

  const data = React.useMemo(() => users, [users]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    setPageSize,
    state,
  } = useTable(
    {
      columns,
      data,
    },
    usePagination
  );

  const { pageIndex, pageSize } = state;

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
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                onClick={(e) => handleRowClick(e)}
                key={i}
                {...row.getRowProps()}
              >
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

      <TablePagination
        prev={previousPage}
        canPrev={canPreviousPage}
        next={nextPage}
        canNext={canNextPage}
        pageIndex={pageIndex}
        pageOptions={pageOptions}
        setPageSize={setPageSize}
        pageSize={pageSize}
      />
    </TableContainer>
  );
}

export default Table;
