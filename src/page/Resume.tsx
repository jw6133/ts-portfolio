import React, { useEffect, useState } from 'react';
import { styled } from '@linaria/react';
import CoverLetterCellList from '../components/resume_c/resume_sub_component/CoverLetterCellList';
import { SectionTitle } from '../components/portfolio_c/PortfolioCell';

type ResumeProps = {};

export default function Resume(props: ResumeProps) {
  
  return (
    <>
      <SectionTitle>Resume question</SectionTitle>
      {/* <RemoteControl/> */}
      <Container>
        <CoverLetterCellList/>
      </Container>
    </>
  );
}

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 60px;
  background-color: transparent;
  padding: 20px;

  .sectionName {
    display: block;
    font-size: 24px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;

export const Title = styled.span`
  display: block;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const WhiteBox = styled.div`
  width: 90%;
  background-color: white;
  padding: 3%;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  &.mainText {
    font-size: 30px;
    font-weight: bold;
  }
`;
