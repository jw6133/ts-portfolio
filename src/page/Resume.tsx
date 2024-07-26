import React from 'react';
import Head from '../components/Head';
import Foot from '../components/Foot';
import { styled } from '@linaria/react';

type ResumeProps = {};

export default function Resume(props: ResumeProps) {
  return (
    <>
      <Head />
      <Container>
        <Title>Resume</Title>
        <WhiteBox className="mainText">
          이력서
        </WhiteBox>
        <span className="sectionName">인적사항</span>
        <WhiteBox>
          <InnerWrapper>
            <div className="innerBox">이름: 백지웅</div>
            <div className="innerBox">생년월일: 2001.06.13</div>
            <div className="innerBox">성별: 남자</div>
            <div className="innerBox">이메일: jw6133@naver.com</div>
            <div className="innerBox">전화번호: 010-5102-3647</div>
            <div className="innerBox">주소: 서울 광진구 광장동</div>
          </InnerWrapper>
        </WhiteBox>
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

export const InnerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 5%;
  
  .innerBox {
    flex: 1 1 calc(50% - 10px);
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border: 1px solid #e0e0e0;
  }
`;
