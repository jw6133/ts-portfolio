import React from 'react';
import SkillTag from './resume_sub_component/SkillTag';
import { WhiteBox } from '../../page/Resume';

type SkillProps = {};



export default function Skill(props: SkillProps) {
  return (
    <>
      <span className="sectionName">보유 스킬</span>
      <WhiteBox>
        <SkillTag/>
      </WhiteBox>
    </>
  );
}
