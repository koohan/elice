import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #e0e0e0;
`;

const THead = styled.thead`
  background-color: #f0f0f0;
`;

const TBody = styled.tbody``;

const TableRow = styled.tr`
  border-bottom: 1px solid #e0e0e0;
`;

const Cell = styled.td`
  padding: 16px;
  text-align: center;

  &:first-child {
    text-align: left;
    padding-left: 45px;
  }

  &:last-child {
    text-align: center;
  }
`;

export { Table, THead, TBody, TableRow, Cell };
