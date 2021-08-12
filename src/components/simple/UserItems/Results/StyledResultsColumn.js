import styled from "styled-components";

export const Table = styled.table`
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
