import React from 'react';
import { styled } from '@linaria/react';
import { SectionTitle } from './PortfolioCell';
import { SiGithub } from 'react-icons/si';
import "../../style/font.css"

const SkillsSection: React.FC = () => {
  return (
    <SkillsWrapper>
      <SectionTitle>Skill & Tools</SectionTitle>
      <SkillsContainer>
        {/* 프론트 */}
        <SkillCategory>
          <CategoryTitle>FrontEnd</CategoryTitle>
          <IconsWrapper>
            <SkillIcon><img src='svg/html5.svg' alt='html5'/></SkillIcon>
            <SkillIcon><img src='svg/css3.svg' alt='css3'/></SkillIcon>
            <SkillIcon><img src='svg/javascript.svg' alt='javascript'/></SkillIcon>
            <SkillIcon><img src='svg/react.svg' alt='react'/></SkillIcon>
            <SkillIcon><img src='svg/typescript.svg' alt='typescript'/></SkillIcon>
          </IconsWrapper>
        </SkillCategory>
        {/* 서브기술 */}
        <SkillCategory>
          <CategoryTitle>Sub-Tech</CategoryTitle>
          <IconsWrapper>
            <SkillIcon><img src='svg/python.svg' alt='python'/></SkillIcon>
            <SkillIcon><img src='svg/firebase.svg' alt='firebase'/></SkillIcon>
            <SkillIcon><img src='svg/figma.svg' alt='figma'/></SkillIcon>
          </IconsWrapper>
        </SkillCategory>
        {/* 의사소통 */}
        <SkillCategory>
          <CategoryTitle>Cooperation</CategoryTitle>
          <IconsWrapper>
            <SkillIcon><SiGithub/></SkillIcon>
            <SkillIcon><img src='svg/notion.svg' alt='notion'/></SkillIcon>
            <SkillIcon><img src='svg/discord.svg' alt='discord'/></SkillIcon>
          </IconsWrapper>
        </SkillCategory>
      </SkillsContainer>
    </SkillsWrapper>
  );
};

export default SkillsSection;

const SkillsWrapper = styled.div`
  width: 100%;
  justify-content: center;
  padding: 60px 0;
  background-color: transparent;
  color: white;
  border-radius: 8px;
  max-width: 1600px;
  margin: 0 auto;
`;

const SkillsContainer = styled.div`
    width: 100%;
    display: flex;
    gap:8%;
    justify-content: center;
    padding: 60px 0;
`;

const SkillCategory = styled.div`
  text-align: center;
`;

const CategoryTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  color:black;
`;

const IconsWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const SkillIcon = styled.div`
  width: 40px;
  height:40px;
  font-size:40px;
  background-color: #000000;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
