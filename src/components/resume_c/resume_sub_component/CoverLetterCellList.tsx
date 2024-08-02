import React, { useState, useEffect } from 'react';
import { styled } from '@linaria/react';
import { getResumeData } from '../../../api/firebase';

interface CoverLetterCellProps {
  id: number;
  title: string;
  value: string;
  onTitleChange: (id: number, title: string) => void;
  onChange: (id: number, value: string) => void;
  onDelete: (id: number) => void;
}

interface FirebaseData {
  title1: string;
  text1: string;
  title2: string;
  text2: string;
  title3: string;
  text3: string;
}

const CoverLetterCell: React.FC<CoverLetterCellProps> = ({ id, title, value, onTitleChange, onChange, onDelete }) => {
  return (
    <CoverLetterCellWrapper>
      <input
        type="text"
        value={title}
        onChange={(e) => onTitleChange(id, e.target.value)}
        placeholder="제목을 입력하세요"
        className="titleInput"
      />
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
  const [inputs, setInputs] = useState<{ id: number; title: string; value: string }[]>([]);
  const [nextId, setNextId] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getResumeData();
      console.log("Received data: ", data);
      if (data) {
        const formattedData = [
          { id: 1, title: data.title1, value: data.text1 },
          { id: 2, title: data.title2, value: data.text2 },
          { id: 3, title: data.title3, value: data.text3 },
        ];
        setInputs(formattedData);
        setNextId(formattedData.length + 1);
      }
    };

    fetchData();
  }, []);

  const handleAdd = () => {
    setInputs([...inputs, { id: nextId, title: '', value: '' }]);
    setNextId(nextId + 1);
  };

  const handleTitleChange = (id: number, title: string) => {
    setInputs(inputs.map(input => (input.id === id ? { ...input, title } : input)));
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
          title={input.title}
          value={input.value}
          onTitleChange={handleTitleChange}
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

  .titleInput {
    width: 100%;
    border: none;
    border-bottom: 1px solid #ddd;
    padding: 10px;
    box-sizing: border-box;
    font-weight: bold;
  }

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
