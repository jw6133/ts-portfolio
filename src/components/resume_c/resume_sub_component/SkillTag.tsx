import React, { useState, useEffect } from 'react';
import { styled } from '@linaria/react';

const protoTag = ["aaa", "bbb"];

const SkillTag: React.FC = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    setTags(protoTag);
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if ((event.key === 'Enter' || event.key === 'Comma') && inputValue.trim() !== '') {
      event.preventDefault();
      if (!tags.includes(inputValue.trim())) {
        setTags([...tags, inputValue.trim()]);
      }
      setInputValue('');
    }
  };

  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter(t => t !== tag));
  };

  return (
    <TagInputWrapper>
      <TagList>
        {tags.map(tag => (
          <Tag key={tag}>
            {tag}
            <RemoveButton onClick={() => handleRemoveTag(tag)}>×</RemoveButton>
          </Tag>
        ))}
      </TagList>
      <InputWrapper>
        <input
          type="text"
          placeholder="태그를 입력하세요"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </InputWrapper>
      <Tooltip>쉼표 혹은 엔터를 입력하여 태그를 등록 할 수 있습니다. 등록된 태그를 클릭하면 삭제됩니다.</Tooltip>
    </TagInputWrapper>
  );
};

export default SkillTag;

const TagInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 8px;
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  background-color: #eee;
  border-radius: 3px;
  padding: 5px 10px;
  margin-right: 5px;
  margin-bottom: 5px;
`;

const RemoveButton = styled.span`
  margin-left: 8px;
  cursor: pointer;
`;

const InputWrapper = styled.div`
  width: 100%;
  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

const Tooltip = styled.div`
  margin-top: 8px;
  padding: 8px;
  background-color: #333;
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
`;
