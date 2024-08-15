import React, { useState, useEffect, useRef } from 'react';
import { styled } from '@linaria/react';
import { getResumeData } from '../../../api/firebase';

interface CoverLetterCellProps {
  id: number;
  title: string;
  value: string;
}

interface FirebaseData {
  title1: string;
  text1: string;
  title2: string;
  text2: string;
  title3: string;
  text3: string;
}

const CoverLetterCell: React.FC<CoverLetterCellProps> = ({ title, value }) => {
  return (
    <CoverLetterCellWrapper className='coverLetter'>
      <h3>{title}</h3>
      <p>{value}</p>
    </CoverLetterCellWrapper>
  );
};

const CoverLetterCellList: React.FC = () => {
  const [inputs, setInputs] = useState<{ id: number; title: string; value: string }[]>([]);

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
      }
    };

    fetchData();
  }, []);

  const coverLetterCellRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        } else {
          entry.target.classList.remove('fade-in');
        }
      });
    }, { threshold: 0.1 });

    const items = coverLetterCellRef.current?.querySelectorAll('.coverLetter');
    items?.forEach(item => observer.observe(item));

    return () => {
      items?.forEach(item => observer.unobserve(item));
    };
  }, []);

  return (
    <Container ref={coverLetterCellRef}>
      {inputs.map(input => (
        <CoverLetterCell
          key={input.id}
          id={input.id}
          title={input.title}
          value={input.value}
        />
      ))}
    </Container>
  );
};

export default CoverLetterCellList;

const Container = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const CoverLetterCellWrapper = styled.div`
  border-radius: 10px;
  padding: 20px;
  background-color: #C8D8E7; 
  color: #03152D;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  opacity: 1;
  transition: opacity 1s ease-in-out;

  &.fade-in {
    opacity: 1;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 10px;
    color: #224F75; 
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    color: #256279; 
    white-space: pre-wrap;
  }
`;
