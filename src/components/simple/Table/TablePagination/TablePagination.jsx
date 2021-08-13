import React from "react";
import PropTypes from "prop-types";

import {
  StyledTablePagination,
  StyledNextPrevBtns,
  StyledSelect,
} from "./StyledTablePagination";

import ArrowLeft from "../../../../assets/ArrowLeft";
import ArrowRight from "../../../../assets/ArrowRight";

function TablePagination({
  prev,
  next,
  canPrev,
  canNext,
  pageIndex,
  pageOptions,
  pageSize,
  setPageSize,
}) {
  return (
    <StyledTablePagination>
      <span>
        Page{" "}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>{" "}
      </span>

      <StyledNextPrevBtns onClick={prev} disabled={!canPrev}>
        <ArrowLeft />
      </StyledNextPrevBtns>
      <StyledNextPrevBtns onClick={next} disabled={!canNext}>
        <ArrowRight />
      </StyledNextPrevBtns>
      <StyledSelect
        value={pageSize}
        onChange={(e) => setPageSize(Number(e.target.value))}
      >
        {[10, 20, 50].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </StyledSelect>
    </StyledTablePagination>
  );
}

TablePagination.propTypes = {
  prev: PropTypes.func,
  next: PropTypes.func,
  canPrev: PropTypes.bool,
  canNext: PropTypes.bool,
  pageIndex: PropTypes.number,
  pageOptions: PropTypes.array,
  pageSize: PropTypes.number,
  setPageSize: PropTypes.func,
};

export default TablePagination;
