import React from 'react';
import styled from 'styled-components';
import ProjectProgressBar from './ProjectProgressBar';

interface TableData {
  name: string;
  role: string;
  description: string;
  contribution: number;
}

interface CellPeopleTableProps {
  data: TableData[];
}

const CellPeopleTable: React.FC<CellPeopleTableProps> = ({ data }) => {
  // 테이블 헤더
  const headers = ['이름', '역할', '내용', '기여도'];

  return (
    <StyledTable>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.role}</td>
            <td>{item.description}</td>
            <td>
              <ProjectProgressBar progress={item.contribution} />
            </td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default CellPeopleTable;

const StyledTable = styled.table`
  border-collapse: collapse;
  margin: 0 auto 3% auto;
  font-size: 18px;
  width: 80%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

  thead tr {
    background-color: #0093ed;
    color: #ffffff;
    text-align: left;
  }
  thead th {
    border-right: 1px solid #ffffff;
  }
  thead th:last-of-type {
    border-right: none;
  }

  th,
  td {
    padding: 12px 15px;
  }

  tbody tr {
    border-bottom: 1px solid #dddddd;
  }
  tbody td {
    border-right: 1px solid #dddddd;
  }
  tbody td:last-of-type {
    border-right: none;
  }
  tbody tr:nth-of-type(odd) {
    background-color: #D6F5FF;
  }
  tbody tr:nth-of-type(even) {
    background-color: #e6f9ff;
  }

  tbody tr:last-of-type {
    border-bottom: 2px solid #7DD8FF;
  }
`;
