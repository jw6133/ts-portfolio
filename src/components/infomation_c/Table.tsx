import React from 'react';
import styled from 'styled-components';

interface TableProps {
  data: { [key: string]: any }[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  // 데이터의 첫 번째 항목을 기준으로 테이블 헤더를 생성합니다.
  const headers = Object.keys(data[0]);
  
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
            {headers.map((header) => (
              <td key={header}>{item[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;

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
