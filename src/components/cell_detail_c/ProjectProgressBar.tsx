import React from 'react';
import { styled } from '@linaria/react';

interface ProjectProgressBarProps {
    progress: number;
}

const ProjectProgressBar: React.FC<ProjectProgressBarProps> = ({ progress }) => {
    return (
        <ProgressBarContainer>
            <Progress progress={progress}>
                <ProgressText>{progress}%</ProgressText>
            </Progress>
        </ProgressBarContainer>
    );
};

export default ProjectProgressBar;

// 스타일 컴포넌트 정의
const ProgressBarContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  height: 30px;
  background-color: #e0e0de;
  border-radius: 5px;
  overflow: hidden;
`;

const Progress = styled.div<{ progress: number }>`
  width: ${({ progress }) => progress}%;
  position: relative;
  height: 100%;
  background-color: #76c7c0;
  transition: width 0.5s ease-in-out;
`;

const ProgressText = styled.span`
  color: black;
  font-weight: bold;
  position: absolute;
  right: 3%;
  line-height: 30px;
`;
