import React, { useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTable, usePagination } from "react-table";

import { setUsers, getOneUser } from "../../redux/actions/actions";
import { TableContainer } from "./TableContainer";
import { COLUMNS } from "../../data/column";

import TablePagination from "../../components/simple/Table/TablePagination/TablePagination";

function Table() {
  const dispatch = useDispatch();
  const history = useHistory();
  const users = useSelector(({ users }) => users.users);

  const handleRowClick = (row) => {
    dispatch(getOneUser(row.original));
    history.push({
      pathname: `/user/${row.original.username}`,
      state: { id: row.original.id },
    });
  };

  useEffect(() => {
    dispatch(setUsers());
  }, [dispatch]);

  const columns = useMemo(() => COLUMNS, [COLUMNS]);

  const data = useMemo(() => users, [users]);

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
                onClick={() => handleRowClick(row)}
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
