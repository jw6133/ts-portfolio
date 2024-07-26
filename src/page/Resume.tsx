import React from 'react';
import Head from '../components/Head';
import Foot from '../components/Foot';
import { styled } from '@linaria/react';
import Human from '../components/resume_c/Human';

type ResumeProps = {};

export default function Resume(props: ResumeProps) {
  return (
    <>
      <Head />
      <Container>
        <Title>Resume</Title>
        <WhiteBox className="mainText">이력서</WhiteBox>
        <Human />
      </Container>
      <Foot />
    </>
  );
}

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 100px;
  background-color: #e8ecef;
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
  width: 100%;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  &.mainText {
    font-size: 30px;
    font-weight: bold;
  }
`;
