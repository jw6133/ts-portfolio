import React from 'react';
import { styled } from '@linaria/react';
import { WhiteBox } from '../../page/Resume';
import './resume_css/Human.css';
import { InnerWrapper } from './Human';

type SkillProps = {};

const skillList = ["프론트엔드", "웹 개발", "React", "TypeScript"];

export default function Skill(props: SkillProps) {
  return (
    <>
      <span className="sectionName">희망직무</span>
      <WhiteBox>
        <InnerWrapper>
          <InnerBox>
            {skillList.map((skill, index) => (
              <div className='cell' key={index}>{skill}</div>
            ))}
          </InnerBox>
        </InnerWrapper>
      </WhiteBox>
    </>
  );
}

export const InnerBox = styled.div`
  display: inline-block;
  width: 894px;
  height: 90px; /* 기본 높이 */
  font-size: 16px;
  align-items: center;
  justify-content: center;
  border: 1px solid #e0e0e0;
  margin-right: 10px;
  display: flex;
  flex-wrap: wrap;

  .cell {
    width:138px;
    height:36px;
    margin: 5px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

