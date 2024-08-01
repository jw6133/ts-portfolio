import React, { useState } from 'react';
import { styled } from '@linaria/react';

interface CoverLetterCellProps {
  id: number;
  value: string;
  onChange: (id: number, value: string) => void;
  onDelete: (id: number) => void;
}

const CoverLetterCell: React.FC<CoverLetterCellProps> = ({ id, value, onChange, onDelete }) => {
  return (
    <CoverLetterCellWrapper>
      <textarea
        value={value}
        onChange={(e) => onChange(id, e.target.value)}
        placeholder="내용을 입력하세요"
      />
      <div className="footer">
        <span>{value.length}자</span>
        <button onClick={() => onDelete(id)}>삭제</button>
      </div>
    </CoverLetterCellWrapper>
  );
};

const CoverLetterCellList: React.FC = () => {
  const [inputs, setInputs] = useState<{ id: number; value: string }[]>([]);
  const [nextId, setNextId] = useState(1);

  const handleAdd = () => {
    setInputs([...inputs, { id: nextId, value: '' }]);
    setNextId(nextId + 1);
  };

  const handleChange = (id: number, value: string) => {
    setInputs(inputs.map(input => (input.id === id ? { ...input, value } : input)));
  };

  const handleDelete = (id: number) => {
    setInputs(inputs.filter(input => input.id !== id));
  };

  return (
    <Container>
      {inputs.map(input => (
        <CoverLetterCell
          key={input.id}
          id={input.id}
          value={input.value}
          onChange={handleChange}
          onDelete={handleDelete}
        />
      ))}
      <AddButton onClick={handleAdd}>+ 추가</AddButton>
    </Container>
  );
};

export default CoverLetterCellList;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CoverLetterCellWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  background-color: #f9f9f9;

  textarea {
    width: 100%;
    height: 100px;
    border: none;
    resize: none;
    outline: none;
    padding: 10px;
    box-sizing: border-box;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

    span {
      font-size: 14px;
      color: #999;
    }

    button {
      background: none;
      border: none;
      color: #007bff;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const AddButton = styled.button`
  background: none;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;
