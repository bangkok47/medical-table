import styled from "styled-components";

export const TableContainer = styled.div`
  max-width: 1400px;
  margin: auto;
  padding: 30px;
  margin-top: 35px;

  table {
    border-collapse: collapse;
    width: 100%;
    font-family: "News Cycle";

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
